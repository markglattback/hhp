import styled from "styled-components";

export default styled.div`
  font-size: 2.25rem;
  font-weight: 500;
  text-transform: uppercase;

  p {
    margin: 0 auto;
    line-height: 1.3;
  }

  p:first-of-type {
    margin-top: 1.5rem;
  }

  p:last-of-type {
    margin-bottom: 1.5rem;
  }

  div.text {
    line-height: 1.3;
  }

  div.links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  a.link {
    background: var(--white);
    color: var(--black);
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.14rem;
    text-transform: uppercase;
    padding: 0.5rem;
    margin: 1rem 0;
    cursor: pointer;
    border: none;

    :hover {
      background: var(--black);
      color: var(--white);
    }
  }

  a.button {
    text-decoration: none;
  }
`;