// @ts-nocheck
import groq from "groq";
import client from "../client";
import getImageUrl from "../getImageUrl";
import TrialButton from "components/TrialButton";
import SubHeading from "components/SubHeading";
import PageImage from "components/PageImage";
import MainQuote from "components/MainQuote";
import BlockContent from "@sanity/block-content-to-react";
import Quote from "components/Quote";
import ClassesCTA from "components/ClassesCTA";
import YoutubeVideo from "components/YoutubeVideo";

export type PageContent = {
  metaDescription: string;
  metaTitle: string;
  slug: {
    __type: string;
    current: string;
  };
  structuredContent: object[];
  pageSections: object[];
};

export async function getPageContentWithSlug(
  slug: string
): Promise<PageContent> {
  const data = await client.fetch(
    groq`*[_type == 'pageContent' && slug.current == $slug] {
  ...,
  structuredContent[] {
    ...,
    _type == 'callToActionRef' => {
    	"data": *[_type=='callToAction' && _id == ^._ref] {
        ...
      }
    },
    _type == 'videoRef' => {
      "data": *[_type=='video' && _id == ^._ref] {
        ...
      }
    },
    _type == 'reference' => ^->{ ... }
  },
  pageSections[] {
    ...,
    _type == 'reference' => ^->{ ... }
  }
}`,
    { slug }
  );

  return data[0];
}

const BlockRenderer = (props) => {
  const { style = "normal", children = [], markDefs = [] } = props.node;

  if (style === "normal") {
    let noSpacing = false;
    children.forEach((child) => {
      if (child.marks.length) {
        for (let i = 0; i < child.marks.length; i++) {
          if (child.marks[i] === "noSpacing") noSpacing = true;
        }
      }
    });

    return (
      <p className={noSpacing ? "no-spacing" : undefined}>{props.children}</p>
    );
  }

  // check for custom styles
  if (style === "smallertext") {
    return <p className="smaller-text">{props.children}</p>;
  }

  if (style === "largetext") {
    return <p className="large-text">{props.children}</p>;
  }

  // fall back to default
  return BlockContent.defaultSerializers.types.block(props);
};

export const serializers = {
  types: {
    block: BlockRenderer,
    subHeading: (props) => <SubHeading>{props.node.content}</SubHeading>,
    mainQuote: (props) => (
      <MainQuote
        text={props.node.text as string}
        person={props.node.person as string}
      />
    ),
    trialButton: (props) => (
      <TrialButton
        buttonText={props.node.text as string}
        href={props.node.link}
      />
    ),
    image: (props) => (
      <img src={getImageUrl(props.node.asset._ref as string)} />
    ),
    lineBreak: (props) => <br />,
    pageImage: (props) => {
      return (
        <PageImage
          src={getImageUrl(props.node.file.asset._ref as string)
            .sharpen(100)
            .url()}
          alt={props.node.altText as string}
          header={props.node.headerImage}
        />
      );
    },
    quote: (props) => (
      <Quote
        snippet={props.node.snippet}
        text={props.node.text}
        person={props.node.person}
      />
    ),
    callToActionRef: ({ node: { data } }) => {
      return (
        <ClassesCTA
          headline={data[0].headlineText}
          buttonOneText={data[0].buttonOneText}
          buttonOneLink={data[0].buttonOneLink.current}
          buttonTwoText={data[0].buttonTwoText}
          buttonTwoLink={data[0].buttonTwoLink.current}
        />
      );
    },
    videoRef: ({ node: { data } }) => {
      return <YoutubeVideo url={data[0].videoURL as string} />;
    },
  },
  marks: {
    newLine: (props) => <br />,
    noSpacing: (props) => {
      return <span className="no-spacing">{props.children}</span>;
    },
    yellowText: (props) => {
      return <span style={{ color: "var(--yellow)" }}>{props.children}</span>;
    },
  },
  styles: {
    largeText: (props) => <span className="large-text">{props.children}</span>,
    smallerText: (props) => (
      <span className="smaller-text">{props.children}</span>
    ),
  },
};
