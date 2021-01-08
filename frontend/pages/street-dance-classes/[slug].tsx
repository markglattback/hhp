import Head from "next/head";
import { GetStaticPaths } from "next"
import { SlugObject, getPageWithSlug, PageContent } from "lib/api/queries"
import trimSlugPath from "lib/trimSlugPath";
import getSlugsForDirectory from "lib/getSlugsForDirectory";
import SanityBlockContent from "components/SanityBlockContent";

type GetStaticPropsParams = {
  params: {
    slug: string;
  }
}

// trim this from slugs pulled in from CMS
const directory = 'street-dance-classes/';

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
              <SanityBlockContent blocks={section.content} />
            </section>
          )
        })}
      </>
    </>
  );
}