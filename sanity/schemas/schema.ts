// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import assets from "./assets";
import blockContent from "./blockContent";
import blockQuoteContent from "./blockQuoteContent";
import mainQuote from "./mainQuote";
import pageContent from "./pageContent";
import pageImage from "./pageImage";
import quote from "./quote";
import subHeading from "./subHeading";
import trialButton from "./trialButton";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    assets,
    blockContent,
    blockQuoteContent,
    mainQuote,
    pageContent,
    pageImage,
    quote,
    subHeading,
    trialButton,
  ]),
});
