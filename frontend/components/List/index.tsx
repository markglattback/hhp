import { ReactNode } from "react";
import StyledList from './styles';

export default function List({ children }: { children: ReactNode }) {
  return <StyledList className="grid">
    <div className="cell">
      {children}
    </div>
  </StyledList>;
}