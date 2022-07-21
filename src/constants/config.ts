import { YouTubeProps } from "react-youtube";

export const videoConfig: YouTubeProps["opts"] = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 1,
    iv_load_policy: 3,
    start: 1,
  },
};
