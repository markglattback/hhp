import styled from "styled-components";

export default styled.div`
  max-width: 976px; /* to maintain 16:9 aspect ratio */
  margin: 0 auto;
  position: relative;

  img {
    display: block;
    object-fit: cover;
  }
`;