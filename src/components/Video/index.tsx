import React, { useContext, useState } from "react";
import YouTube from "react-youtube";
import Context from "../../context";

import { getUrlVideo } from "../../utils/url";
import { videoConfig } from "../../constants/config";
import styles from "./video.module.scss";

const Video = () => {
  const data = useContext(Context);
  const [title, setTitle] = useState("");
  const [options, setOptions] = useState(videoConfig);
  const [pageInterval, setPageInterval] = useState<any>(null);

  const onReadyVideo = (_event: any): void => {
    setTitle(_event?.target?.videoTitle || "");

    data.video.setVideoPlay(true);
    if (
      !data.video?.videoOption?.startTime ||
      data.video?.videoOption?.url !== data.video?.videoOption?.old
    ) {
      data.video.setVideoOption("startTime", Date.now());
    }
    if (
      data.video?.videoOption?.url === data.video?.videoOption?.old &&
      data.video?.videoOption?.time
    ) {
      const dateTime: number =
        (Date.now() - data.video?.videoOption?.startTime) / 1000 || 0;

      setOptions((prev: any) => ({
        ...prev,
        playerVars: {
          ...prev?.playerVars,
          start:
            dateTime ||
            Number(data.video?.videoOption?.time) ||
            videoConfig.playerVars.start,
        },
      }));
    }
  };

  const changeInterval = (num: number) => {
    const interval = setInterval(() => {
      data.video.setVideoTime(num);
    }, 2000);

    if (pageInterval) {
      clearInterval(pageInterval);
    }

    setPageInterval(interval);
  };

  const onChangeVideo = (event: any): void => {
    if (
      event.data === YouTube.PlayerState.PLAYING &&
      !data.video?.videoOption.done
    ) {
      changeInterval(Number(event.target.getCurrentTime()));
      data.video.setVideoDone(false);
    } else if (pageInterval) {
      clearInterval(pageInterval);
    }

    data.video.setVideoPlay(event.data === YouTube.PlayerState.PLAYING);
    data.video.setVideoTime(event.target.getCurrentTime());
  };

  return (
    <div className={styles.wrapper}>
      {title && <div className={styles.title}>{title}</div>}
      <YouTube
        videoId={getUrlVideo(data.video?.videoOption?.url)}
        opts={options}
        onReady={onReadyVideo}
        onStateChange={onChangeVideo}
        onPlaybackQualityChange={onChangeVideo}
      />
    </div>
  );
};

export default Video;
