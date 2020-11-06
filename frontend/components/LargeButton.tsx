import styled from "styled-components";
import Link, { LinkProps } from "next/link";
import BlockContent from "@sanity/block-content-to-react";
import { serializers } from "../lib/serializers";

const Wrapper = styled.div`
  width: fit-content;
  margin: 1.5rem auto;

  button {
    display: block;
    border: none;
    background: var(--yellow);
    color: var(--black);
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    margin: 0 auto;
    cursor: pointer;

    :hover {
      background: var(--white);
    }
  }

  .caption {
    width: 100%;
  }
`;

interface Props extends LinkProps {
  buttonText: string;
  additionalText: object[];
}

export default function LargeButton({
  buttonText,
  additionalText,
  href,
  ...props
}: Props) {
  return (
    <Wrapper>
      <div>
        <Link href={href} {...props}>
          <button type="button">{buttonText}</button>
        </Link>
        <div className="caption">
          <BlockContent blocks={additionalText} serializers={serializers} />
        </div>
      </div>
    </Wrapper>
  );
}
