import React, { useContext, useState } from "react";
import Context from "../../context";
import { useNavigate } from "react-router-dom";

import { RouteNames } from "../../types/router";
import icon from "../../assets/images/icon.webp";
import classes from "./index.module.scss";

const HomePage = (): React.ReactElement => {
  const navigate = useNavigate();

  const data = useContext(Context);

  const [inputUrl, setInputUrl] = useState(data.video.videoOption.url || "");

  const setUrl = () => {
    data?.video.setVideoUrl(inputUrl);
    data.video.setVideoPlay(false);
    navigate(RouteNames.VIDEO);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <span>Home page</span>
        <img src={icon} alt="icon" />
      </div>

      <div className={classes.content}>
        <input
          className={classes.input}
          placeholder="YouTube Video URL"
          type="text"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value || "")}
        />
        <button disabled={!inputUrl} className={classes.btn} onClick={setUrl}>
          Save
        </button>
      </div>
    </div>
  );
};

export default HomePage;
