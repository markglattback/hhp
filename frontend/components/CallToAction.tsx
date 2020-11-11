import Link, { LinkProps } from "next/link";
import styled from "styled-components";
import BlockContent, { BlockContentProps } from "@sanity/block-content-to-react";
import { serializers } from "../lib/serializers";

const CallToActionWrapper = styled.div`
  font-size: 2.25rem;
  font-weight: 500;
  text-transform: uppercase;

  div.buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  a.button {
    background: var(--white);
    color: var(--black);
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

  a.button {
    text-decoration: none;
  }
`;

export type ButtonProps = {
  text: string;
} & LinkProps;


export function LinkButton({ text, ...props }: ButtonProps) {
  return (
    <Link {...props} >
      <a className="button">{text}</a>
    </Link>
  )
}

export type CallToActionProps = {
  headline: BlockContentProps['blocks'];
  buttonOneText: string;
  buttonOneLink: string;
  buttonTwoText: string;
  buttonTwoLink: string;
};

export default function CallToAction({
  headline,
  buttonOneText,
  buttonOneLink,
  buttonTwoText,
  buttonTwoLink,
}: CallToActionProps) {
  return (
    <CallToActionWrapper>
      <BlockContent blocks={headline} serializers={serializers} />
      <div className="buttons">
        <LinkButton text={buttonOneText} href={buttonOneLink} />
        <LinkButton text={buttonTwoText} href={buttonTwoLink} />
      </div>
    </CallToActionWrapper>
  );
}
