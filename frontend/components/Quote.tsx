import styled from "styled-components";
import Image from "next/image";
import { serializers } from "lib/api/pageContent";
// @ts-ignore
import BlockContent from "@sanity/block-content-to-react";

const QuoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.95rem;

  div.stars {
    font-size: 2rem;
    color: var(--yellow);
  }

  div.snippet {
    font-size: 1.3rem;
    color: var(--yellow);
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.16rem;
  }

  q {
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
    margin-top: 1rem;
    font-style: italic;
  }
`;

type Props = {
  text: string;
  snippet: string;
  person: string;
};

export default function Quote({ text, snippet, person }: Props) {
  return (
    <QuoteWrapper>
      <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      <div className="snippet">"{snippet}"</div>
      <div className="text">
        <figure>
          <q>
            <BlockContent blocks={text} serializers={serializers} />
          </q>
          <figcaption>{person}</figcaption>
        </figure>
      </div>
    </QuoteWrapper>
  );
}
