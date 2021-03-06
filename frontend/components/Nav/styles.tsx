import styled, { css } from "styled-components";

export default styled.header<{ open: boolean }>`
  display: flex;
  justify-content: center;
  grid-area: content;
  position: fixed;
  top: 0px;
  width: 100%;
  height: var(--header-height-desktop);
  margin: 0 auto;
  background: var(--black);
  color: var(--white);
  font-size: 16px;
  font-family: "Barlow Condensed", "Roboto Condensed", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  letter-spacing: -0.015rem;
  z-index: var(--zIndexFront);

  nav {
    justify-content: center;
    align-items: center;

    .nav-content {
      align-items: center;
    }

      ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    
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
  }
  }

  div.brand-logo > img {
    display: block;
    width: 52px;
    object-fit: cover;
    filter: contrast(150%);
    image-rendering: crisp-edges;
  }




  @media screen and (max-width: 830px) {
    height: 64px;

    nav {
      position: fixed;
      width: 100%;
      flex-direction: column;
      justify-content: flex-start;
      height: 100vh;
      background: var(--black);
      opacity: 0;
      visibility: hidden;
      transition: 0.15s ease-in;

      &.no-transition {
        transition: none;
      }

      ${({ open }) => open && css`
        visibility: initial;
        opacity: 1;
      `}

      ul {
        margin-top: 2rem;
        flex-direction: column;
        align-items: center;
        
        li:not(:first-of-type) a:before {
          display: none;
        }
      }
    }

    div.brand-logo {
      margin-top: 1rem;
    }

   

  }
  
`;