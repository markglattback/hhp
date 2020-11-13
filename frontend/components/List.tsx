import { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: var(--yellow);
  margin: 1.5rem 0;

  ul {
    list-style-position: inside;
  }
`;

export default function List({ children }: { children: ReactNode }) {
return <Wrapper>{children}</Wrapper>;
}