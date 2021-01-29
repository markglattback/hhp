import { ReactNode } from "react";
import StyledList from './styles';

export default function List({ children }: { children: ReactNode }) {
  return <StyledList className="grid">
    <ul className="cell">
      {children}
    </ul>
  </StyledList>;
}