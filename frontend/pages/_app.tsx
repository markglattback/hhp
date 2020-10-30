import { AppProps } from "next/app";
import "styles/normalize.css";
import "styles/globals.css";
import Head from "next/head";
import Layout from "components/Layout";

export default function MyApp(props: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />

        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Layout {...props} />
    </>
  );
}
