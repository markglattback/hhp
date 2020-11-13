// @ts-nocheck
import getImageUrl from './getImageUrl';
import SubHeading from "../components/SubHeading";
import PageImage from "../components/PageImage";
import MainQuote from "../components/MainQuote";
import Quote from "../components/Quote";
import CallToActionSection from "../components/CallToAction";
import YoutubeVideo from "../components/YoutubeVideo";
import LargeButton from '../components/LargeButton';
import BlockContent from "@sanity/block-content-to-react";
import Link from 'next/link';
import { ReactChildren } from 'react';
import List from 'components/List';

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

  if (style === "large") {
    return <p className="large-text">{props.children}</p>;
  }

  if (style === "largeCaps") {
    return <p className="large-text large-text--caps">{props.children}</p>;
  }

  if (style === "caption") {
    return <span className="caption">{props.children}</span>;
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
    {node.subHeadingFirstLine && (
      <SubHeading>
        {node.subHeadingFirstLine}
        <NewLine text={node.subHeadingSecondLine} />
      </SubHeading>
    )}
  </>
    )
}


/* check if child is highlighted */
function checkChildrenForHighlights(children): boolean {
  if (children.length === 0) return false;
  if (children.length > 1) return false;

  const child = children[0];

  if (typeof child === 'string') return false;

  if (child.props.node.mark === 'highlightText') return true;

  return false;  
}

export const serializers = {
  types: {
    block: BlockRenderer,
    heading1: (props) => <Heading node={props.node} tag="H1" />,
    heading2: (props) => <Heading node={props.node} tag="H2" />,
    heading3: (props) => <Heading node={props.node} tag="H3" />,
    heading: (props) => (
      // used for headline style callouts without a need for a semantic h tags
      <SubHeading>
        {props.node.firstLine}
        <NewLine text={props.node.secondLine} />
      </SubHeading>
    ),
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
    largeButton: (props) => {
      const additionalText = props.node.additionalText && props.node.additionalText[0];
      const href = props.node.link.href.url || props.node.link.href.slug.current;

      return (
        <LargeButton
          buttonText={props.node.text as string}
          additionalText={additionalText}
          href={href}
        />
      );
    },
    image: (props) => {
      return (<img src={getImageUrl(props.node.asset._ref as string)} />
    )},
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
          buttonOneLink={props.node.buttonOneLink.slug}
          buttonTwoText={props.node.buttonTwoText}
          buttonTwoLink={props.node.buttonTwoLink.slug}
        />
      );
    },
    video: (props) => {
      return <YoutubeVideo url={props.node.videoURL as string} />;
    },
  },
  list: List,
  marks: {
    linkExternal: (props) => {
      return <a href={props.mark.url} target="_blank" rel="noreferrer noopener">{props.children}</a>
    },
    linkInternal: (props) => {
      // ADD TEXT DECORATION STYLE TO ANCHORS IF REQUIRED
      let highlight = checkChildrenForHighlights(props.children);
      
      return <Link href={props.mark.slug as string}><a style={{ textDecorationColor: highlight ? 'var(--yellow)' : 'inherit'}}>{props.children}</a></Link>
    },
    highlightText: (props) => <span style={{ color: 'var(--yellow)', textDecorationColor: "var(--yellow)" }}>{props.children}</span>,
    noSpacing: (props) => {
      return <span className="no-spacing">{props.children}</span>;
    },
  },
  styles: {
    largeText: (props) => <span className="large-text">{props.children}</span>,
    smallerText: (props) => (
      <span className="smaller-text">{props.children}</span>
    ),
  },
};
