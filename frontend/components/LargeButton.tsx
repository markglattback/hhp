import styled from "styled-components";
import Link, { LinkProps } from "next/link";
import BlockContent from "@sanity/block-content-to-react";
import serializers from "../lib/serializers";
import { UrlObject } from "url";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: fit-content;
  margin: 1.5rem auto;

  button, a.button {
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

  a.button {
    text-decoration: none;
  }

  .caption {
    width: 100%;

    p {
      margin: 0;
      margin-top: 0.5rem;
    }
  }
`;

interface Props extends LinkProps {
  buttonText: string;
  additionalText?: object[];
}

export default function LargeButton({
  buttonText,
  additionalText,
  href,
  ...props
}: Props) {
  let isExternalUrl: boolean = false;

  // convert to string from UrlObject
  if (typeof href !== 'string') {
    href = href.toString();
  }

  if (!href.startsWith('/')) isExternalUrl = true;

  return (
    <Wrapper>
      <div>
        {!isExternalUrl && (<Link href={href} {...props}>
          <button type="button">{buttonText}</button>
        </Link>)}
        {isExternalUrl && (<a href={href} target="_blank" rel="noreferrer noopener" className="button">{buttonText}</a>)}
        {additionalText && (
          <div className="caption">
            <BlockContent blocks={additionalText} serializers={serializers} />
          </div>
        )}
      </div>
    </Wrapper>
  );
}
