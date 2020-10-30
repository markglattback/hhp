import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "pqrn8hbf",
  dataset: "production",
  useCdn: process.env.NODE_ENV === "production",
});
