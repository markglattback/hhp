import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import BlockContent from "@sanity/block-content-to-react";
import getAllPageContent, { getPageWithSlug, PageContent } from "lib/api/queries";
import { serializers } from "lib/serializers";
import { Category } from "components/Footer";

export const getStaticProps = async () => {
  const pageContent: PageContent = await getPageWithSlug('/');

  return {
    props: {
      pageContent
    },
  };
};

export default function Home({
  pageContent,
  // footerContent,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
