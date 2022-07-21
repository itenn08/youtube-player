import React from "react";
import { useNavigate } from "react-router-dom";

import { RouteNames } from "../../types/router";
import classes from "./index.module.scss";
import gif from "../../assets/gif/giphy.gif";

const GifPage = (): React.ReactElement => {
  const navigate = useNavigate();

  const toBack = () => {
    navigate(RouteNames.VIDEO);
  };

  return (
    <div className={classes.wrapper}>
      <button className={classes.btn} onClick={toBack}>
        Return to Back
      </button>
      <div className={classes.gif}>
        <img src={gif} alt="GIF" />
      </div>
    </div>
  );
};

export default GifPage;
