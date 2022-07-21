import HomePage from "../pages/Home/index";
import VideoPage from "../pages/Video/index";
import GifPage from "../pages/Gif/index";
import { IRoute, RouteNames } from "../types/router";

export const routes: IRoute[] = [
  { path: RouteNames.HOME, component: HomePage, titleName: "Home" },
  { path: RouteNames.VIDEO, component: VideoPage, titleName: "Video" },
  { path: RouteNames.GIF, component: GifPage, titleName: "GIF" },
];
