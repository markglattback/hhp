import styled from "styled-components";

const Wrapper = styled.div`
  width: min(729px, 100%);
  margin: 1rem auto 2rem auto;
`;

const PreserveAspectRatioWrap = styled.div`
  box-shadow: 0px 0px 0px 10px var(--yellow);
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

export default function YoutubeVideo({ url }: { url: string }) {
  const src = `https://www.youtube.com/embed/${
    url.split("watch?v=")[1]
  }?autoplay=1&mute=1&modestbranding=1&rel=0&controls=0`;

  return (
    <Wrapper>
      <PreserveAspectRatioWrap>
        <iframe
          width="560"
          height="315"
          src={src}
          frameBorder="0"
          allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </PreserveAspectRatioWrap>
    </Wrapper>
  );
}
