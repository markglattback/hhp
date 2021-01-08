import styled from "styled-components";

export default styled.footer`
  color: var(--grey);
  border-top: 3px solid var(--grey);
  padding: 1.5rem 0;
  position: relative;
  flex-shrink: 0;

  div.links {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin: 0 0.5rem;
  }

  div.category-name {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.06em;

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  div.category-links {
    font-weight: 300;
    font-size: 12px;
    letter-spacing: 0;

    ul {
      display: flex;
      flex-direction: column;
      padding: 0;
    }

    li {
      list-style: none;
      margin: 0.25rem 0;
    }
  }
`;