import serializers from "../SanityBlockContent/serializers";
import StyledQuote from './styles';
// @ts-ignore
import BlockContent from "@sanity/block-content-to-react";

type Props = {
  text: string;
  snippet: string;
  person: string;
};

export default function Quote({ text, snippet, person }: Props) {
  return (
    <StyledQuote>
      <article id={snippet}>
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
      </article>
    </StyledQuote>
  );
}
