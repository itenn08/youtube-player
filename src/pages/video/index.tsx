import React, { useContext, useState } from "react";
import YouTube from "react-youtube";
import Context from "../../context";
import { useNavigate } from "react-router-dom";

import { RouteNames } from "../../types/router";
import { videoConfig } from "../../constants/config";
import styles from "./video.module.scss";

const VideoPage = (): React.ReactElement => {
  const data = useContext(Context);

  const [options, setOptions] = useState(videoConfig);
  const [intervalL, setIntervalL] = useState<any>(null);
  const navigate = useNavigate();

  const onReadyVideo = (_event: any): void => {
    data.video.setVideoOptionPlay(true);
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
      data.video.setVideoOptionTime(num);
    }, 2000);
    if (intervalL) {
      clearInterval(intervalL);
    }
    setIntervalL(interval);
  };
  const onChangeVideo = (event: any): void => {
    if (
      event.data === YouTube.PlayerState.PLAYING &&
      !data.video?.videoOption.done
    ) {
      changeInterval(Number(event.target.getCurrentTime()));
      data.video.setVideoOptionDone(false);
    } else if (intervalL) {
      clearInterval(intervalL);
    }

    data.video.setVideoOptionPlay(event.data === YouTube.PlayerState.PLAYING);
    data.video.setVideoOptionTime(event.target.getCurrentTime());
  };

  const toBack = () => {
    data.video.setVideoOptionOld(data.video?.videoOption?.url);
    navigate(RouteNames.HOME);
  };

  const toGIF = () => {
    data.video.setVideoOptionOld(data.video?.videoOption?.url);
    navigate(RouteNames.GIF);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.options}>
        <button
          className={`${styles.btn} ${styles.btnBack}`}
          disabled={data.video?.videoOption?.play}
          onClick={toBack}
        >
          Edit
        </button>
        <button className={styles.btn} onClick={toGIF}>
          GIF
        </button>
      </div>
      <div className={styles.player}>
        <div className={styles.title}>{data.video?.videoOption?.title}</div>
        <YouTube
          videoId={`${
            data.video?.videoOption?.url?.split("v=")[1]?.split("&")[0]
          }`}
          opts={options}
          onReady={onReadyVideo}
          onStateChange={onChangeVideo}
          onPlaybackQualityChange={onChangeVideo}
        />
      </div>
    </div>
  );
};

export default VideoPage;
