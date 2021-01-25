import { useInView } from "react-intersection-observer";
import Youtube, { Options, PlayerVars } from "react-youtube";
import { useState, useEffect } from "react";
import { PreserveAspectRatioWrap, YoutubeWrapper } from "./styles";

export default function YoutubeVideo({ url }: { url: string }) {
  // YouTube Setup
  type YTEventTarget = YT.Player & EventTarget & any;
  const [player, setPlayer] = useState<YTEventTarget | null>(null);

  let id = url.split("watch?v=")[1];

  const playerVars: PlayerVars = {
    enablejsapi: 1,
    modestbranding: 1,
    autoplay: 1,
    mute: 1,
    controls: 1,
    rel: 0,
    iv_load_policy: 3,
  };

  const opts: Options = {
    width: "560",
    height: "315",
    playerVars,
  };

  function onReady({ target, data }: { target: YTEventTarget; data: number }) {
    setPlayer(target as YTEventTarget);
    player?.pauseVideo();
  }

  function onPlayVideo({
    target,
    data,
  }: {
    target: YTEventTarget;
    data: number;
  }) {
    player?.playVideo();
  }

  function onPauseVideo({
    target,
    data,
  }: {
    target: YTEventTarget;
    data: number;
  }) {
    player?.pauseVideo();
  }

  // Intersection Observer Setup

  const { ref, inView, entry } = useInView({});

  useEffect(() => {
    if (inView) {
      player?.playVideo();
    } else {
      player?.pauseVideo();
    }
  }, [inView]);

  return (
    <YoutubeWrapper ref={ref} className="grid">
      <div className="cell medium-8 offset medium-offset-2">
        <PreserveAspectRatioWrap>
          <Youtube
            videoId={id}
            opts={opts}
            onReady={onReady}
            onPlay={onPlayVideo}
            onPause={onPauseVideo}
          />
        </PreserveAspectRatioWrap>
      </div>
    </YoutubeWrapper>
  );
}
