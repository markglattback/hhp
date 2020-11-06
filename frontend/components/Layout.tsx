import { AppProps } from "next/app";
import Nav from "./Nav";
import { useEffect } from "react";
import styled from "styled-components";
import Container from "../styled components/Container";

const Main = styled.main`
  padding-top: 54px;
  text-align: center;
`;

export default function Layout({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav compact={false} />
      <Main>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Main>
    </>
  );
}
