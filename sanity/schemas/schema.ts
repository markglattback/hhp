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
import pageImage from "./pageImage";
import quote from "./quote";
import largeButton from "./largeButton";
import video from "./video";
import videoRef from "./videoRef";
import section from "./section";
import page from "./page";
import blockContentBasic from "./blockContentBasic";
import bigQuote from "./bigQuote";
import linkInternal from "./linkInternal";
import linkExternal from "./linkExternal";
import heading from "./heading";
import footerCategories from "./footerCategories";
import Sanity from "./helpers";

const schema = Sanity.createSchema('default', [
  assets,
  bigQuote,
  blockContent,
  blockContentBasic,
  blockContentSimple,
  callToAction,
  callToActionRef,
  footerCategories,
  heading,
  largeButton,
  linkExternal,
  linkInternal,
  page,
  pageImage,
  quote,
  section,
  video,
  videoRef,
]);

// // Then we give our schema to the builder and provide the result to Sanity
// const schema = createSchema({
//   // We name our schema
//   name: "default",
//   // Then proceed to concatenate our document type
//   // to the ones provided by any plugins that are installed
//   types: schemaTypes.concat([
//     assets,
//     bigQuote,
//     blockContent,
//     blockContentBasic,
//     blockContentSimple,
//     callToAction,
//     callToActionRef,
//     footerCategories,
//     heading,
//     largeButton,
//     linkExternal,
//     linkInternal,
//     page,
//     pageImage,
//     quote,
//     section,
//     video,
//     videoRef,
//   ]),
// });

console.log(schema);

export default schema;
