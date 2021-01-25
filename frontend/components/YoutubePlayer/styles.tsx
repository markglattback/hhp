import styled from "styled-components";

export const YoutubeWrapper = styled.div`
  /* width: min(729px, 100%); */
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const PreserveAspectRatioWrap = styled.div`
  box-shadow: 0px 0px 0px calc(1em / 2) var(--yellow);
  position: relative;
  padding-bottom: 56.25%;
  width: 100%;
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;