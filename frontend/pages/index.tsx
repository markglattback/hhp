import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { getPageWithSlug, PageContent } from "lib/api/queries";
import SanityBlockContent from "components/SanityBlockContent";

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
              <SanityBlockContent blocks={section.content} />
            </section>
          )
        })}
      </>
    </>
  );
}
