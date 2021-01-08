import { HeadingTagProps } from '../../lib/serializers/index';
import StyledHeading from './styles';

function NewLine({ text }: { text: string | undefined }) {
  if (!text) return null;

  return (
    <>
      <br />
      {text}
    </>
  )
}

export default function Heading(props: HeadingTagProps['node']) {
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

  const content: (() => JSX.Element | null)[] = [HeadingToRender];

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