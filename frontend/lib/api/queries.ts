import { Category } from "components/Footer";
import groq from "groq";
import client from "lib/client";

export type PageContent = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  content: {
    _key: string;
    _type: string;
    content: object[];
    internalName: string;
    sectionName: string;
  }[];
  metaDescription: string;
  metaTitle: string;
  name: string;
  slug: {
    _type: string;
    current: string;
  };
};

export async function getPageWithSlug(slug: string): Promise<PageContent> {
  const data = await client.fetch(
    groq`

    *[_type == 'page' && slug.current == $slug] {
      ...,
      content[] {
        ...,
        content[] {
          ...,
          _type == 'reference' => ^-> { ... },
          _type == 'largeButton' => {
            ...,
            link {
              ...,
              "href": ^-> { ... }
            },
            additionalText[] {
              ...,
              markDefs[] {
                ...,
                _type == "linkInternal" => ^.slug-> { "slug": slug.current }
              }
            }
          },
          _type == 'callToActionRef' => ^-> {
            ...,
            buttonOneLink {
              ...,
              "slug": ^-> slug.current
            },
            buttonTwoLink {
              ...,
              "slug": ^-> slug.current
            }
          },
          _type == 'videoRef' => ^-> { ... },
          markDefs[] {
            ...,
            _type == "linkInternal" => ^.slug-> { "slug": slug.current }
          }
        }
      }
    }
    
    `,
    { slug }
  )

  return data[0];
}

export async function getFooterContent(): Promise<Category[]> {
  const data = await client.fetch(groq`
    *[_type == 'footerCategories'] | order(footerPosition) {
      ...,
      links[] {
        ...,
        linkRef -> { ... }
      }
    }
  `)

  return data;
}

export type SlugObject = {
  _type: 'slug';
  current: string;
}

export async function getAllSlugs(): Promise<SlugObject[]> {
  const data = await client.fetch(groq`
    *[_type == 'page'] {
      slug
    }
  `);


  return data.map((page: PageContent) => page.slug);
}

export default async function getAllPageContent({ slug }: { slug: string }): Promise<{ pageContent: PageContent, footerContent: Category[] }> {
  const pageContent = await getPageWithSlug(slug);
  const footerContent = await getFooterContent();

  return {
    pageContent,
    footerContent
  }
}