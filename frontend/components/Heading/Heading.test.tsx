import { render, screen } from 'test-utils';
import Heading from '.';
import { HeadingProps } from './types';

// helper functions

function isMultiLine(data: HeadingProps, subHeading: boolean): boolean {
  const { node: { firstLine, secondLine, subHeadingFirstLine, subHeadingSecondLine } } = data;

  if (subHeading) return subHeadingFirstLine && subHeadingSecondLine ? true : false;
  return firstLine && secondLine ? true : false;
}

function positionOfLineBreak(data: HeadingProps, el: 'heading' | 'sub-heading'): number {
  const isHeadingMultiLine = isMultiLine(data, false);
  const isSubHeadingMultiLine = isMultiLine(data, true);
  const subHeadingFirst = data.node.displaySubHeadingFirst;

  if (el === 'heading') {
    if (isHeadingMultiLine && isSubHeadingMultiLine) {
      return subHeadingFirst ? 1 : 0;
    }
    return 0;
  } else {
    if (isHeadingMultiLine && isSubHeadingMultiLine) {
      return subHeadingFirst ? 0 : 1;
    }
    return 0;
  }
}

test('multiline headings and sub-headings render', () => {
  const data: HeadingProps = {
    node: {
      _key: 'sdjjnvsjfjnsakjca',
      _type: 'heading',
      displaySubHeadingFirst: true,
      firstLine: 'First line of heading',
      secondLine: 'Second line of heading',
      headingElement: 'H1',
      headingSize: 'big',
      subHeadingFirstLine: 'First line of sub heading',
      subHeadingSecondLine: 'Second line of sub heading',
      subHeadingSize: 'smallest',
    }
  }

  render(<Heading {...data.node} />);

  const lineBreaks = screen.queryAllByTestId('line-break');
  const headingLineBreak = lineBreaks[positionOfLineBreak(data, 'heading')];
  const subHeadingLineBreak = lineBreaks[positionOfLineBreak(data, 'sub-heading')];
  const wrapper = screen.getByTestId('heading');
  const h1 = screen.queryByTestId('heading-h1');
  const h2 = screen.queryByTestId('heading-h2');
  const h3 = screen.queryByTestId('heading-h3');
  const subHeading = screen.getByTestId('sub-heading');

  // Wrapper
  expect(wrapper).toBeInTheDocument();

  // H1 tag
  expect(h1).toBeInTheDocument();
  expect(h1).toHaveTextContent(data.node.firstLine as string);
  expect(h1).toHaveTextContent(data.node.secondLine as string);
  expect(headingLineBreak).toBeInTheDocument();

  // Sub-Heading
  expect(subHeading).toBeInTheDocument();
  expect(subHeading).toHaveTextContent(data.node.subHeadingFirstLine as string);
  expect(subHeading).toHaveTextContent(data.node.subHeadingSecondLine as string);
  expect(subHeadingLineBreak).toBeInTheDocument();

  // Check sub-heading is displayed first
  expect(wrapper.firstChild).toHaveAttribute('data-testid', 'sub-heading');

  // Check no other heading tags are rendered
  expect(h2).not.toBeInTheDocument();
  expect(h3).not.toBeInTheDocument();
});

test('single line headings render', () => {

  const data: HeadingProps = {
    node: {
      _key: 'sdjjnvsjfjnsakjca',
      _type: 'heading',
      displaySubHeadingFirst: false,
      firstLine: 'First line of heading',
      headingElement: 'H2',
      headingSize: 'big',
      subHeadingFirstLine: 'First line of sub heading',
      subHeadingSize: 'smallest',
    }
  }

  render(<Heading {...data.node} />);

  const lineBreaks = screen.queryAllByTestId('line-break');
  const wrapper = screen.getByTestId('heading');
  const h1 = screen.queryByTestId('heading-h1');
  const h2 = screen.queryByTestId('heading-h2');
  const h3 = screen.queryByTestId('heading-h3');
  const subHeading = screen.getByTestId('sub-heading');


  // Single Line Headings Only
  expect(lineBreaks).toHaveLength(0);

  // Wrapper
  expect(wrapper).toBeInTheDocument();

  // H1 tag
  expect(h2).toBeInTheDocument();
  expect(h2).toHaveTextContent(data.node.firstLine as string);

  // Sub-Heading
  expect(subHeading).toBeInTheDocument();
  expect(subHeading).toHaveTextContent(data.node.subHeadingFirstLine as string);

  // Check heading is displayed first
  expect(wrapper.firstChild).toHaveAttribute('data-testid', 'heading-h2');
});