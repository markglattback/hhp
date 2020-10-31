import Link from "next/link";
import styled from "styled-components";
import BlockContent from "@sanity/block-content-to-react";
import { serializers } from "lib/api/pageContent";

const CallToActionWrapper = styled.div`
  font-size: 2.25rem;
  font-weight: 500;
  text-transform: uppercase;

  div.buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  button {
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.14rem;
    text-transform: uppercase;
    padding: 0.5rem;
    margin: 1rem 0;
    cursor: pointer;
    border: none;

    :hover {
      background: var(--black);
      color: var(--white);
    }
  }
`;

type Props = {
  headline: string;
  buttonOneText: string;
  buttonOneLink: string;
  buttonTwoText: string;
  buttonTwoLink: string;
};

export default function ClassesCTA({
  headline,
  buttonOneText,
  buttonOneLink,
  buttonTwoText,
  buttonTwoLink,
}: Props) {
  return (
    <CallToActionWrapper>
      <BlockContent blocks={headline} serializers={serializers} />
      <div className="buttons">
        <Link href={buttonOneLink}>
          <button type="button">{buttonOneText}</button>
        </Link>
        <Link href={buttonTwoLink}>
          <button type="button">{buttonTwoText}</button>
        </Link>
      </div>
    </CallToActionWrapper>
  );
}
