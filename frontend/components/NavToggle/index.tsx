import StyledToggle from './styles';
import { HTMLAttributes, MouseEvent as ReactMouseEvent, SetStateAction } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  setOpen: (value: SetStateAction<boolean>) => void;
}

export default function NavToggle({ open, setOpen }: Props) {
  function toggleMenu(e: ReactMouseEvent) {
    e.preventDefault();
    if (open) {
      setOpen(false);
    } else {
      setOpen(true)
    }
  }

  return (
    <StyledToggle open={open} onMouseDown={toggleMenu} data-testid="nav-toggle">
      <span id="mobile-navigation-toggle" data-testid="nav-toggle-span"></span>
    </StyledToggle>
  );
}
