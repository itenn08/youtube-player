import React, { useContext } from "react";
import Context from "../../context";
import { useNavigate } from "react-router-dom";

import Video from "../../components/Video";
import { RouteNames } from "../../types/router";
import styles from "./video.module.scss";

const VideoPage = (): React.ReactElement => {
  const data = useContext(Context);

  const navigate = useNavigate();

  if (!data.video.videoOption.url) {
    navigate(RouteNames.HOME);
  }

  const toBack = () => {
    data.video.setVideoOld(data.video?.videoOption?.url);
    navigate(RouteNames.HOME);
  };

  const toGIF = () => {
    data.video.setVideoOld(data.video?.videoOption?.url);
    navigate(RouteNames.GIF);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.options}>
        <button
          className={`${styles.btn} ${styles.back}`}
          disabled={data.video?.videoOption?.play}
          onClick={toBack}
        >
          EDIT LINK
        </button>
        <button className={styles.btn} onClick={toGIF}>
          WATCH GIF
        </button>
      </div>
      <Video />
    </div>
  );
};

export default VideoPage;
