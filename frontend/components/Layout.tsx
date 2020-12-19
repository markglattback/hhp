import { AppProps } from "next/app";
import Nav from "./Nav";
import { useEffect } from "react";
import styled from "styled-components";
import Container from "../styled components/Container";
import Footer from "./Footer";
import { CustomAppProps } from "pages/_app";

const Main = styled.main`
  grid-area: content;
  padding-top: 54px;
  text-align: center;
  flex: 1 0 auto;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-areas: "content";
  flex: 1 0 auto;
`;

export default function Layout({ Component, pageProps, appProps }: CustomAppProps) {

  return (
    <>
      <ContentGrid>
        <Nav compact={false} />
        <Main>
          <Container>
            <Component {...pageProps} />
          </Container>
        </Main>
      </ContentGrid>
      <Footer categories={appProps.footerContent} />
    </>
  );
}
