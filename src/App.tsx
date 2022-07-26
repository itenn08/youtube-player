import React, { useState } from "react";

import Router from "./routes/Router";
import Context from "./context";
import classes from "./App.module.scss";

const App = () => {
  const [videoOption, setVideoOption] = useState({
    url: "",
    play: false,
    time: null,
    done: false,
    old: "",
  });

  return (
    <Context.Provider
      value={{
        video: {
          videoOption,
          setVideoUrl: (url: string) =>
            setVideoOption((prev) => ({ ...prev, url })),
          setVideoTime: (time: number | null) =>
            setVideoOption((prev) => ({ ...prev, time })),
          setVideoPlay: (play: boolean) =>
            setVideoOption((prev) => ({ ...prev, play })),
          setVideoDone: (done: boolean) =>
            setVideoOption((prev) => ({ ...prev, done })),
          setVideoOld: (old: string) =>
            setVideoOption((prev) => ({ ...prev, old })),
          setVideoOption: (name: string, value: any) =>
            setVideoOption((prev) => ({ ...prev, [name]: value })),
        },
      }}
    >
      <div className={classes.wrapper}>
        <Router />
      </div>
    </Context.Provider>
  );
};

export default App;
