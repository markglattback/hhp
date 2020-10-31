import Head from "next/head";
import {
  getPageContentWithSlug,
  PageContent,
  serializers,
} from "lib/api/pageContent";
import { InferGetStaticPropsType } from "next";
import BlockContent from "@sanity/block-content-to-react";
import Container from "styled components/Container";

export const getStaticProps = async () => {
  const pageContent: PageContent = await getPageContentWithSlug("/");

  return {
    props: {
      pageContent,
    },
  };
};

export default function Home({
  pageContent,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{pageContent.metaTitle}</title>
        <meta name="description" content={pageContent.metaDescription} />
        <meta name="keywords" content="street dance classes" />
      </Head>
      <div>
        <BlockContent
          blocks={pageContent.structuredContent}
          serializers={serializers}
        />
      </div>
    </>
  );
}
