import Link, { LinkProps } from "next/link";
import BlockContent, { BlockContentProps } from "@sanity/block-content-to-react";
import serializers from "../../lib/serializers";
import StyledCallToAction from './styles';

export type ButtonProps = {
  text: string;
} & LinkProps;


export function LinkButton({ text, ...props }: ButtonProps) {
  return (
    <Link {...props} >
      <a className="link">{text}</a>
    </Link>
  )
}

export type CallToActionProps = {
  firstLine: string;
  secondLine?: string;
  buttonOneText: string;
  buttonOneLink: string;
  buttonTwoText: string;
  buttonTwoLink: string;
};

export default function CallToAction({
  firstLine,
  secondLine,
  buttonOneText,
  buttonOneLink,
  buttonTwoText,
  buttonTwoLink,
}: CallToActionProps) {
  return (
    <StyledCallToAction data-testid="call-to-action">
      <div className="text">
        <span data-testid="cta-first-line">{firstLine}</span>
        {secondLine && (
          <>
            <br />
            <span data-testid="cta-second-line">{secondLine}</span>
          </>
        )
        }
      </div>
      <div className="links" data-testid="cta-links">
        <LinkButton text={buttonOneText} href={buttonOneLink} />
        <LinkButton text={buttonTwoText} href={buttonTwoLink} />
      </div>
    </StyledCallToAction>
  );
}
