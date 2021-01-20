// @ts-ignore
import BlockContent from "@sanity/block-content-to-react";
import serializers, { BigQuoteProps } from "../SanityBlockContent/serializers";
import StyledMainQuote from './styles';


type Props = Pick<BigQuoteProps['node'], 'text' | 'person' | 'reference'>;

export default function MainQuote({ text, person, reference }: Props) {
  return (
    <StyledMainQuote className="grid">
      <q className="cell" >
        <span>{text}</span>
      </q>
      <figcaption className="cell">{person}</figcaption>
    </StyledMainQuote>
  );
}
