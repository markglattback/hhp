import styled from "styled-components";

export default styled.div`
  width: fit-content;
  margin: 1.5rem auto;

  button, a.button {
    display: block;
    border: none;
    background: var(--yellow);
    color: var(--black);
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    margin: 0 auto;
    cursor: pointer;

    :hover {
      background: var(--white);
    }
  }

  a.button {
    text-decoration: none;
  }

  .caption {
    width: 100%;

    p {
      margin: 0;
      margin-top: 0.5rem;
    }
  }
`;