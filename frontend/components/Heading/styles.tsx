import { HeadingProps } from './types';
import styled from 'styled-components'

const fontSizes = {
  big: '2.25rem',
  medium: '2rem',
  small: '1.8rem',
  smallest: '1.2rem',
}

type StyledProps = {
  fontSize: HeadingProps['node']['subHeadingSize'];
  subHeadingFontSize: HeadingProps['node']['subHeadingSize'];
  useBodyColor: HeadingProps['node']['useBodyColor'];
  subHeadingWithH1: boolean;
}

export default styled.div<StyledProps>`
  h1, h2, h3 {
    ${({ fontSize }) => fontSize ? `font-size: ${fontSizes[fontSize as 'big' | 'medium' | 'small' | 'smallest']}` : ''};
  }

  div.sub-heading {
    color: ${({ useBodyColor }) => useBodyColor ? 'var(--white)' : 'var(--yellow)'};
    font-size: ${({ subHeadingFontSize }) => subHeadingFontSize ? fontSizes[subHeadingFontSize] : '1.5rem'};
    line-height: 1;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: ${({ subHeadingWithH1 }) => subHeadingWithH1 ? '0.4rem' : 'inherit'};
  }
`;