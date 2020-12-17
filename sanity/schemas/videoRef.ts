import Sanity from "./helpers"

export default Sanity.createReferenceType({
  name: "videoRef",
  title: "Video Reference",
  type: "reference",
  to: [{ type: "video" }],
});
