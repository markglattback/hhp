import styled, { css, keyframes } from "styled-components";

/* STYLES */
export default styled.header<{ open: boolean }>`
  display: none;
  grid-area: content;
  color: white;
  font-size: 16px;
  font-family: "Barlow Condensed", "Roboto Condensed", sans-serif;
  letter-spacing: -0.015rem;
  z-index: var(--zIndexFront);

  @media screen and (max-width: 700px) {
    display: block;
  }

  @media screen and (min-width: 701px) {
    display: block;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 54px;
    background: var(--black);
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    transform: translateX(100vw);
    transition: 0.15s ease-in-out;
    max-width: min(100%, var(--maxWidth));
    height: 100vh;
    margin: 0 auto;
    
    ${({ open }) => open && css`
      background: var(--black);
      transform: translateX(0);
    `}

    @media screen and (min-width: 701px) {
      flex-direction: row;
      justify-content: center;
      transform: translateX(0);
      height: auto;
    }
  }

  div.brand-logo {
    @media screen and (max-width: 700px) {
      margin-top: 1rem;
    }
  }

  div.brand-logo > img {
    display: block;
    width: 52px;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (max-width: 700px) {
      margin-top: 2rem;
      flex-direction: column;
      align-items: center;
    }
  }

  li:hover,
  li.active {
    background: var(--activeLink);
  }

  li:hover {
    transition-duration: 0.15s;
  }

  li.nav-category:hover,:link.nav-catergoy:active {
    background: none;
  }

  a {
    display: flex;
    margin: 0 1rem;
    line-height: 2.25;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
  }

  li:not(:first-of-type) a:before {
    content: "";
    display: inline-block;
    align-self: stretch;
    width: 1px;
    background: var(--white);
    transform: translateX(-1rem);

    @media (max-width: 700px) {
      display: none;
    }
  }

`;