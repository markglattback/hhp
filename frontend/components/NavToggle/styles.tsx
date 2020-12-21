import { PropsWithoutRef } from "react";
import styled, { css } from "styled-components";

type Props = {
  open: boolean;
} & PropsWithoutRef<JSX.IntrinsicElements['button']>

export default styled.button<Props>`
  grid-area: content;
  justify-self: end;
  display: none;
  height: 64px;
  width: 64px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: var(--zIndexFront);

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 700px) {
    display: block;
  }

  span {
    display: block;
    position: relative;
    /* top: 23px; */
    left: 20px;
    height: 2px;
    width: 24px;
    background: var(--white);
    transition: all 0.15s ease-in-out 0.15s;
  }

  span:before,
  span:after {
    content: "";
    display: block;
    position: absolute;
    height: 2px;
    width: 24px;
    background: var(--white);
    transition: all 0.3s ease-in-out;
  }

  span:before {
    top: -8px;
  }

  span:after {
    top: 8px;
  }


  ${({ open }) => open && css`
    span {
      background: transparent;
      transition: all 0.15s ease-in-out;
    }

    span:before {
      width: 24px;
      transform: translateY(8px) rotate(315deg);
    }

    span:after {
      width: 24px;
      transform: translateY(-8px) rotate(-315deg);
    }
  `}
`;