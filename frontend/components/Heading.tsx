import styled from 'styled-components';
import { Style } from 'util';
import { HeadingTagProps, SanityObjectResult } from '../lib/serializers/index';

const fontSizes = {
  big: '2.25rem',
  medium: '2rem',
  small: '1.8rem',
  smallest: '1.2rem',
}

type StyledProps = {
  fontSize: HeadingTagProps['node']['subHeadingSize'];
  subHeadingFontSize: HeadingTagProps['node']['subHeadingSize'];
  useBodyColor: HeadingTagProps['node']['useBodyColor'];
  subHeadingWithH1: boolean;
}

const StyledHeading = styled.div<StyledProps>`
  h1, h2, h3 {
    ${({ fontSize }) => fontSize ? `font-size: ${fontSizes[fontSize]}` : ''};
  }

  div.sub-heading {
    color: ${({ useBodyColor }) => {console.log(useBodyColor); return useBodyColor ? 'var(--white)' : 'var(--yellow)'}};
    font-size: ${({ subHeadingFontSize }) => subHeadingFontSize ? fontSizes[subHeadingFontSize] : '1.5rem'};
    line-height: 1;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: ${({ subHeadingWithH1 }) => subHeadingWithH1 ? '0.4rem' : 'inherit'};
  }


`;



function NewLine ({ text }: { text: string | undefined }) {
  if (!text) return null;

  return (
    <>
      <br/>
      {text}
    </>
  )
}

export default function Heading (props: HeadingTagProps['node']) {
  const reversed = props.displaySubHeadingFirst;
  
  const HeadingContent = () => (
    <>
      {props.firstLine}
      <NewLine text={props.secondLine} />
    </>
  )

  const Headings = {
    H1: () => <h1><HeadingContent /></h1>,
    H2: () => <h2><HeadingContent /></h2>,
    H3: () => <h3><HeadingContent /></h3>,
    none: () => null,
  }

  const HeadingToRender: () => JSX.Element | null = Headings[props.headingElement];
  
  const content: (() => JSX.Element | null)[]  = [HeadingToRender];

  // if there's subheading content
  if (props.subHeadingFirstLine) {
    const SubHeading = () => (
        <div className="sub-heading">
          {props.subHeadingFirstLine}
          {<NewLine text={props.subHeadingSecondLine} />}
        </div>);

    if (reversed) {
      content.unshift(SubHeading);
    } else {
      content.push(SubHeading);
    }
  }
  
  return (    
    <StyledHeading fontSize={props.headingSize} subHeadingFontSize={props.subHeadingSize} useBodyColor={props.useBodyColor} subHeadingWithH1={props.headingElement === 'H1'}>
      {content.map((Component, index) => <Component key={`${props._key}_${index}`} />)}
    </StyledHeading>
    )
}