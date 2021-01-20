import { AppProps } from "next/app";
import "styles/normalize.css";
import "styles/globals.css";
import "styles/grid.css";
import Head from "next/head";
import Layout from "components/Layout";
import { getFooterContent } from "lib/api/queries";

export type CustomAppProps = AppProps & {
  appProps: any;
}

export default function MyApp(props: CustomAppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Layout {...props} />
    </>
  );
}

MyApp.getInitialProps = async () => {
  const footerContent = await getFooterContent();

  return {
    appProps: {
      footerContent
    }
  }
}