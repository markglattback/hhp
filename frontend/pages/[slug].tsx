import Head from "next/head";
import { GetStaticPaths } from "next"
import { getAllSlugs, SlugObject, getPageWithSlug, PageContent } from "lib/api/queries"
import BlockContent from "@sanity/block-content-to-react";
import serializers from "lib/serializers";



type GetStaticPropsParams = {
  params: {
    slug: string;
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs: SlugObject[] = await getAllSlugs();

  const params = slugs.map(slug => {
    let slugStr = slug.current;

    return { params: { slug: slugStr } }
  });

  return { paths: params, fallback: false };
}


export const getStaticProps = async ({ params }: GetStaticPropsParams) => {
  const { slug } = params;

  const pageContent: PageContent = await getPageWithSlug(slug);

  return {
    props: {
      pageContent
    }
  }
}

export default function DynamicPage({ pageContent }: { pageContent: PageContent }) {
  const { content = [] } = pageContent;

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