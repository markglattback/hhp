import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import Youtube, { Options, PlayerVars } from "react-youtube";
import { useState, SyntheticEvent } from "react";

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
  // YouTube Setup
  type YTEventTarget = YT.Player & EventTarget;
  const [player, setPlayer] = useState<YTEventTarget | null>(null);

  let id = url.split("watch?v=")[1];

  const playerVars: PlayerVars = {
    enablejsapi: 1,
    modestbranding: 1,
    autoplay: 1,
    mute: 1,
    controls: 1,
    rel: 1,
    iv_load_policy: 3,
  };

  const opts: Options = {
    width: "560",
    height: "315",
    playerVars,
  };

  function onReady(event: Event) {
    setPlayer(event.target as YTEventTarget);
    player?.pauseVideo();
  }

  function onPlayVideo(event: Event) {
    player?.playVideo();
  }

  function onPauseVideo(event: Event) {
    player?.pauseVideo();
  }

  // Intersection Observer Setup

  const { ref, inView, entry } = useInView({});

  if (inView) {
    player?.playVideo();
  } else {
    player?.pauseVideo();
  }

  return (
    <Wrapper ref={ref}>
      <PreserveAspectRatioWrap>
        <Youtube videoId={id} opts={opts} onReady={onReady} />
      </PreserveAspectRatioWrap>
    </Wrapper>
  );
}
