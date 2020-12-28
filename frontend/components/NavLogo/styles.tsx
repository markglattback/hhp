import styled from "styled-components";

export default styled.div`
  img {
    display: block;
    width: 52px;
    object-fit: cover;
    filter: contrast(150%);
    image-rendering: crisp-edges;
  }

  @media (max-width: 700px) {
    position: fixed;
    top: 6px;
    left: 12px;
  }
`;