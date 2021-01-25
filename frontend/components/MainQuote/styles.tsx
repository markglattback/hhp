import styled from "styled-components";

export default styled.figure`
  margin: 0;

  q {
    display: block;
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: 0.125em;

    ::before,
    ::after {
      content: "";
      display: none;
    }

    p {
      margin-bottom: 0;
    }

    p:first-of-type::before {
      content: open-quote;
      display: inline-block;
    }

    p:last-of-type::after {
      content: close-quote;
      display: inline-block;
    }
  }

  figcaption {
    color: var(--yellow);
    font-weight: 500;
  }
`;
