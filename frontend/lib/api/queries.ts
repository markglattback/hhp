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
    __type: string;
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