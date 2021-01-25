import serializers, { NonGridBlockRenderer } from '../SanityBlockContent/serializers';
import StyledQuote from './styles';
// @ts-ignore
import BlockContent from "@sanity/block-content-to-react";

//  Override default block serializer 
const customSerializers = {
  ...serializers,
  types: {
    ...serializers.types,
    block: (props: any) => <NonGridBlockRenderer {...props} />
  }
}

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
              <BlockContent blocks={text} serializers={customSerializers} />
            </q>
            <figcaption>{person}</figcaption>
          </figure>
        </div>
      </article>
    </StyledQuote>
  );
}
