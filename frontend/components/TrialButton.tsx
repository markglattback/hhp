import styled from "styled-components";
import Link, { LinkProps } from "next/link";

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
  }

  .caption {
    width: 100%;
  }
`;

interface Props extends LinkProps {
  buttonText: string;
  messageText: string;
}

export default function TrialButton({
  buttonText,
  messageText,
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
          Had your free trial?{" "}
          <Link href="/join">
            <a style={{ color: "var(--yellow)" }}>Join here</a>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}
