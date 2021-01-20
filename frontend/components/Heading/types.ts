export type HeadingProps = {
  node: {
    _type: 'heading';
    _key: string;
    headingElement: 'none' | 'H1' | 'H2' | 'H3';
    firstLine?: string;
    secondLine?: string;
    headingSize?: 'big' | 'medium' | 'small';
    subHeadingFirstLine?: string;
    subHeadingSecondLine?: string;
    displaySubHeadingFirst?: boolean;
    subHeadingSize?: 'big' | 'medium' | 'small' | 'smallest';
    useBodyColor?: boolean;
  }
}