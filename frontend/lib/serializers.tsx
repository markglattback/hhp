// @ts-nocheck
import getImageUrl from './getImageUrl';
import TrialButton from "../components/TrialButton";
import SubHeading from "../components/SubHeading";
import PageImage from "../components/PageImage";
import MainQuote from "../components/MainQuote";
import Quote from "../components/Quote";
import CallToActionSection from "../components/CallToAction";
import YoutubeVideo from "../components/YoutubeVideo";
import LargeButton from '../components/LargeButton';
import BlockContent from "@sanity/block-content-to-react";

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

const NewLine = ({ text }: { text: string | undefined }) => {
  if (!text) return null;

  return (
    <>
      <br/>
      {text}
    </>
  )
}

type Tags = 'H1' | 'H2' | 'H3';

const Heading = ({ node, tag }: { node: any, tag: Tags }) => {
  const HeadingContent = () => (
    <>
      {node.firstLine}
      <NewLine text={node.secondLine} />
      <NewLine text={node.thirdLine} />
    </>
  )

  return (    
    <>
    { (tag === 'H1') && <h1><HeadingContent /></h1> }
    { (tag === 'H2') && <h2><HeadingContent /></h2> }
    { (tag === 'H3') && <h3><HeadingContent /></h3> }
    <SubHeading>
      {node.subHeadingFirstLine}
      <NewLine text={node.subHeadingSecondLine} />
    </SubHeading>
  </>
    )
}

export const serializers = {
  types: {
    block: BlockRenderer,
    heading1: (props) => <Heading node={props.node} tag="H1" />,
    heading2: (props) => <Heading node={props.node} tag="H2" />,
    heading3: (props) => <Heading node={props.node} tag="H3" />,
    subHeading: (props) => <SubHeading>{props.node.content}</SubHeading>,
    bigQuote: (props) => (
      <MainQuote
        text={props.node.text as string}
        person={props.node.person as string}
      />
    ),
    mainQuote: (props) => (
      <MainQuote
        text={props.node.text as string}
        person={props.node.person as string}
      />
    ),
    largeButton: (props) => (
      <LargeButton
        buttonText={props.node.text as string}
        additionalText={props.node.additionalText}
        href={props.node.link}
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
    callToAction: (props) => {
      return (
        <CallToActionSection
          headline={props.node.headlineText}
          buttonOneText={props.node.buttonOneText}
          buttonOneLink={props.node.buttonOneLink.current}
          buttonTwoText={props.node.buttonTwoText}
          buttonTwoLink={props.node.buttonTwoLink.current}
        />
      );
    },
    video: (props) => {
      return <YoutubeVideo url={props.node.videoURL as string} />;
    },
  },
  marks: {
    highlightText: (props) => <span style={{ color: 'var(--yellow)' }}>{props.children}</span>,
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
