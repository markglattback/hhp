// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import assets from "./assets";
import blockContent from "./blockContent";
import blockContentSimple from "./blockContentSimple";
import callToAction from "./callToAction";
import callToActionRef from "./callToActionRef";
import mainQuote from "./mainQuote";
import pageContent from "./pageContent";
import pageImage from "./pageImage";
import quote from "./quote";
import subHeading from "./subHeading";
import largeButton from "./largeButton";
import video from "./video";
import videoRef from "./videoRef";
import lineBreak from "./lineBreak";
import section from "./section";
import page from "./page";
import blockContentBasic from "./blockContentBasic";
import heading1 from "./heading1";
import heading2 from "./heading2";
import heading3 from "./heading3";
import bigQuote from "./bigQuote";
import linkInternal from "./linkInternal";
import linkExternal from "./linkExternal";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    assets,
    bigQuote,
    blockContent,
    blockContentBasic,
    blockContentSimple,
    callToAction,
    callToActionRef,
    heading1,
    heading2,
    heading3,
    largeButton,
    lineBreak,
    linkExternal,
    linkInternal,
    // mainQuote,
    page,
    // pageContent,
    pageImage,
    quote,
    section,
    subHeading,
    video,
    videoRef,
  ]),
});
