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
    <StyledCallToAction data-testid="call-to-action">
      <BlockContent blocks={headline} serializers={serializers} />
      <div className="buttons">
        <LinkButton text={buttonOneText} href={buttonOneLink} />
        <LinkButton text={buttonTwoText} href={buttonTwoLink} />
      </div>
    </StyledCallToAction>
  );
}
