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
  const pageContent: PageContent = await getPageContentWithSlug("/404");

  return {
    props: {
      pageContent,
    },
  };
};

export default function Custom404({
  pageContent,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{pageContent.metaTitle}</title>
      </Head>
      <div>
        <Container>
          <BlockContent
            blocks={pageContent.structuredContent}
            serializers={serializers}
          />
        </Container>
      </div>
    </>
  );
}
