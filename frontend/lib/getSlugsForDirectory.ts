import { getAllSlugs } from "./api/queries";

export default async function (directory: string) {
  return (await getAllSlugs()).filter(slug => slug.current.includes(directory));
}