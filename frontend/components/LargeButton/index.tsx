import Link, { LinkProps } from "next/link";
import BlockContent from "@sanity/block-content-to-react";
import serializers from "../../lib/serializers";
import StyledWrapper from './styles'

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
    <StyledWrapper>
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
    </StyledWrapper>
  );
}
