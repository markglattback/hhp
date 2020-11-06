import styled from "styled-components";
// @ts-ignore
import BlockContent from "@sanity/block-content-to-react";
import { serializers } from "../lib/serializers";

const QuoteWrapper = styled.figure`
  q {
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: 0.125em;

    ::before,
    ::after {
      content: "";
      display: none;
    }

    p {
      margin-bottom: 0;
    }

    p:first-of-type::before {
      content: open-quote;
      display: inline-block;
    }

    p:last-of-type::after {
      content: close-quote;
      display: inline-block;
    }
  }

  figcaption {
    color: var(--yellow);
    font-weight: 500;
  }
`;

type Props = {
  text: string;
  person: string;
};

export default function MainQuote({ text, person }: Props) {
  return (
    <QuoteWrapper>
      <q>
        <BlockContent blocks={text} serializers={serializers} />
      </q>
      <figcaption>{person}</figcaption>
    </QuoteWrapper>
  );
}
