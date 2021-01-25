import Link, { LinkProps } from "next/link";
import BlockContent, { BlockContentProps } from "@sanity/block-content-to-react";
import serializers from "../SanityBlockContent/serializers";
import StyledCallToAction from './styles';
import { PropsWithoutRef } from "react";

export type ButtonProps = {
  text: string;
} & LinkProps & PropsWithoutRef<JSX.IntrinsicElements['a']>;


export function LinkButton({ text, className, ...props }: ButtonProps) {
  return (
    <Link {...props} >
      <a className={`link ${className}`}>{text}</a>
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
    <StyledCallToAction data-testid="call-to-action" className="grid">
      <div className="text cell">
        <span data-testid="cta-first-line">{firstLine}</span>
        {secondLine && (
          <>
            <br />
            <span data-testid="cta-second-line">{secondLine}</span>
          </>
        )
        }
      </div>
      <div className="grid grid-gap" data-testid="cta-links">
        <LinkButton text={buttonOneText} href={buttonOneLink} className="cell medium-5 offset medium-offset-1" />
        <LinkButton text={buttonTwoText} href={buttonTwoLink} className="cell medium-5" />
      </div>
    </StyledCallToAction>
  );
}
