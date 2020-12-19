import { useState } from "react";
import styled, { css } from "styled-components";
import NavCategory from "./NavCategory";
import NavLink from "./NavLink";

/* TYPES */
type Props = {
  compact: boolean;
};

/* STYLES */
const Header = styled.header<{ open: boolean }>`
  grid-area: content;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 54px;
  background: var(--black);
  color: white;
  font-size: 16px;
  font-family: "Barlow Condensed", "Roboto Condensed", sans-serif;
  letter-spacing: -0.015rem;
  z-index: var(--zIndexFront);

  /* mobile nav */
  @media (max-width: 480px) {
    transform: translateX(100vw);
    
    ${({ open }) => open && css`
      transform: translateX(0);
    `}
  }

  nav {
    max-width: min(100%, var(--maxWidth));
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    @media (max-width: 480px) {
      flex-direction: column;
      transform: translateX(100vw);
      transition: 0.3s ease-in-out;

      ${({ open }) => open && css`
        transform: translateX(0);
      `}
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

    @media (max-width: 480px) {
      flex-direction: column;
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
  }
`;

/* Components */
export default function Nav({ compact }: Props) {
  const [open, setOpen] = useState(false);

  function openMenu() {
    setOpen(true);
  }

  function closeMenu() {
    setOpen(false);
  }

  return (
    <Header open={open} >
      <nav>
        <div className="brand-logo">
          <img src="/hhp-logo.png" alt="Hip Hop Pop Logo" />
        </div>
        <ul>
          <NavLink href="street-dance-facts" text="News" />
          <NavCategory name="Dance Schools">
            <NavLink
              href="/street-dance-classes/schools/harlow"
              text="Harlow Dance School"
            />
            <NavLink
              href="/street-dance-classes/schools/bishops-stortford"
              text="Stortford Dance School"
            />
          </NavCategory>
          <NavCategory name="Dance Classes">
            <NavLink
              href="kids-street-dance-classes-for-kids"
              text="Kids Classes"
            />
            <NavLink
              href="street-dance-classes-for-adults"
              text="Adult Classes"
            />
          </NavCategory>
          <NavLink
            href="dance-workshops-in-schools-primary"
            text="In Schools"
          />
          <NavLink href="street-dance-events-uk" text="Events" />
          <NavLink href="contact-us-street-dance-classes" text="Contact" />
          <NavLink href="shop-merchandise-street-dance-wear" text="Shop" />
        </ul>
      </nav>
    </Header>
  );
}
