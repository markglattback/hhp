// @ts-nocheck
import getImageUrl from '../getImageUrl';
import Heading from "../../components/Heading";
import PageImage from "../../components/PageImage";
import MainQuote from "../../components/MainQuote";
import Quote from "../../components/Quote";
import CallToActionSection from "../../components/CallToAction";
import YoutubeVideo from "../../components/YoutubeVideo";
import LargeButton from '../../components/LargeButton';
import BlockContent from "@sanity/block-content-to-react";
import Link from 'next/link';
import List from 'components/List';
import { Url } from 'url';

/** CUSTOM SERIALIZER TYPES **/
/** Work in Progress **/
// Based on expected query return shape

interface SanityBlockContent {
  _key: string;
  [key: string]: any;
}

interface Slug {
  _type: 'slug';
  current: string;
}


export interface SanityObjectResult {
  _key?: string; // if part of an array response
  _type: string;
}

export interface SanityDocumentResult extends SanityObjectResult {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

export interface HeadingTagProps {
  node: {
    _type: 'heading';
    headingElement: 'none' | 'H1' | 'H2' | 'H3';
    firstLine?: string;
    secondLine?: string;
    headingSize?: 'big' | 'medium' | 'small';
    subHeadingFirstLine?: string;
    subHeadingSecondLine?: string;
    displaySubHeadingFirst: boolean | undefined | null;
    subHeadingSize?: 'big' | 'medium' | 'small' | 'smallest';
    useBodyColor: boolean | undefined | null;
  } & SanityObjectResult;
}

export interface BigQuoteProps {
  node: {
    _ref: string;
    _type: 'bigQuote';
    internalName: string;
    person: string;
    reference?: Url;
    text: SanityBlockContent[];
  } & SanityDocumentResult;
}

export interface LargeButtonProps {
  node: {
    _type: 'largeButton';
    text: string;
    link: {
      _ref: string;
      _type: 'reference';
      href: {
        internalName: string;
      } & ({ url: string } | { slug: Slug })
      & SanityDocumentResult;
    };
    additionalText: SanityBlockContent[];
  } & SanityObjectResult;
}



const BlockRenderer = (props: any) => {
  const { style = "normal", children = [], markDefs = [] } = props.node;

  if (style === "normal") {
    let noSpacing = false;
    children.forEach((child: any) => {
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


/* check if child is highlighted */
function checkChildrenForHighlights(children: any[]): boolean {
  if (children.length === 0) return false;
  if (children.length > 1) return false;

  const child = children[0];

  if (typeof child === 'string') return false;

  if (child.props.node.mark === 'highlightText') return true;

  return false;
}

export default {
  types: {
    block: BlockRenderer,
    heading: (props: HeadingTagProps) => <Heading {...props.node} />,
    bigQuote: ({ node }: BigQuoteProps) => (
      <MainQuote
        text={node.text}
        person={node.person}
        reference={node.reference}
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
      )
    },
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

      return <Link href={props.mark.slug as string}><a style={{ textDecorationColor: highlight ? 'var(--yellow)' : 'inherit' }}>{props.children}</a></Link>
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
