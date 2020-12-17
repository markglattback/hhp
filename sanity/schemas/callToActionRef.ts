import Sanity from "./helpers"

export default Sanity.createReferenceType({
  name: "callToActionRef",
  title: "CTA Reference",
  type: "reference",
  to: [{ type: "callToAction" }],
});
