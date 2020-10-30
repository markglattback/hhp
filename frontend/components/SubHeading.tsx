import styled from "styled-components";
import { ReactNode } from "react";

const StyledSubHeading = styled.div`
  color: var(--yellow);
  font-size: 1.5rem; /* 30px desktop - 24px mobile */
  line-height: 1;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.4rem;
`;

type Props = {
  children: ReactNode;
};

export default function SubHeading({ children }: Props) {
  return <StyledSubHeading>{children}</StyledSubHeading>;
}
