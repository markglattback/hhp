import BlockContent, { BlockContentProps } from '@sanity/block-content-to-react';
import serializers from './serializers';

type SanityBlockContentProps = {
  blocks: BlockContentProps['blocks'];
}

export default function SanityBlockContent(props: SanityBlockContentProps) {
  return <BlockContent {...props} serializers={serializers} className="grid-frame-max" renderContainerOnSingleChild={true} />
}