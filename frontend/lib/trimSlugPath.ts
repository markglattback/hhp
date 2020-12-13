export default function trimSlugPath (slug: string, subStr: string) {
    return slug.replace(subStr, '');
  }