import Head from "next/head";
import { GetStaticPaths } from "next"
import { getAllSlugs, SlugObject, getPageWithSlug, PageContent } from "lib/api/queries"
import BlockContent from "@sanity/block-content-to-react";
import serializers from "lib/serializers";
import trimSlugPath from "lib/trimSlugPath";
import getSlugsForDirectory from "lib/getSlugsForDirectory";

type GetStaticPropsParams = {
  params: {
    slug: string;
  }
}

// trim this from slugs pulled in from CMS
const directory = 'street-dance-classes/schools/';

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs: SlugObject[] = await getSlugsForDirectory(directory);

  const params = slugs.map(slug => {
    let slugStr = trimSlugPath(slug.current, directory);

    return { params: { slug: slugStr } }
  });

  return { paths: params, fallback: false };
}


export const getStaticProps = async ({ params }: GetStaticPropsParams) => {
  const { slug } = params;

  const pageContent: PageContent = await getPageWithSlug(`${directory}${slug}`);

  return {
    props: {
      pageContent
    }
  }
}

export default function DynamicPage({ pageContent }: { pageContent: PageContent }) {
  const { content } = pageContent;

  return (
    <>
      <Head>
        <title>{pageContent.metaTitle}</title>
        <meta name="description" content={pageContent.metaDescription} />
        <meta name="keywords" content="street dance classes" />
      </Head>
      <>
        {content.map((section) => {
          return (
            <section id={section.sectionName} key={section._key}>
              <BlockContent blocks={section.content} serializers={serializers} />
            </section>
          )
        })}
      </>
    </>
  );
}