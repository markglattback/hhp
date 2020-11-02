import styled from "styled-components";
import NavLink from "./NavLink";

/* TYPES */
type Props = {
  compact: boolean;
};

/* STYLES */
const Header = styled.header`
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

  nav {
    max-width: var(--maxWidth);
    display: flex;
    align-items: center;
    margin: 0 auto;
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
  }

  li:hover,
  li.active {
    background: var(--activeLink);
  }

  li:hover {
    transition-duration: 0.3s;
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
  return (
    <Header>
      <nav>
        <div className="brand-logo">
          <img src="/hhp-logo.png" alt="Hip Hop Pop Logo" />
        </div>
        <ul>
          <NavLink href="street-dance-facts" text="News" />
          <NavLink
            href="dance-classes-in-harlow-school"
            text="Harlow Dance School"
          />
          <NavLink
            href="dance-classes-in-bishops-stortford"
            text="Stortford Dance School"
          />
          <NavLink
            href="kids-street-dance-classes-for-kids"
            text="Kids Classes"
          />
          <NavLink
            href="street-dance-classes-for-adults"
            text="Adult Classes"
          />
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
