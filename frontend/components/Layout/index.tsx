import { useEffect, useState } from "react";
import { CustomAppProps } from "pages/_app";
import Nav from "../Nav";
import Footer from "../Footer";
import { ContentGrid, Main } from "./styles";
import Container from "../../styles/styled components/Container";

export default function Layout({ Component, pageProps, appProps }: CustomAppProps) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (!hydrated) setHydrated(true);
  }, []);

  return (
    <>
      <ContentGrid className={!hydrated ? 'preload' : undefined}>
        <Nav />
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
