import serializers, { NonGridBlockRenderer } from '../SanityBlockContent/serializers';
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
    <StyledQuote className="grid">
      <article id={snippet} className="cell medium-10 offset medium-offset-1">
        <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <div className="snippet">"{snippet}"</div>
        <div className="text">
          <figure>
            <q>
              <BlockContent blocks={text} serializers={{
                ...serializers,
                types: {
                  ...serializers.types,
                  block: (props: any) => <NonGridBlockRenderer {...props} />
                }
              }} />
            </q>
            <figcaption>{person}</figcaption>
          </figure>
        </div>
      </article>
    </StyledQuote>
  );
}
