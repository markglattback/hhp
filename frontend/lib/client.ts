import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: process.env.SANITY_PROJECT_ID as string,
  dataset: process.env.SANITY_DATASET as string,
  useCdn: process.env.NODE_ENV === "production",
});
