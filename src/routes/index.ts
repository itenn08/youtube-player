import HomePage from "../pages/home/index";
import VideoPage from "../pages/video/index";
import GifPage from "../pages/gif/index";
import { IRoute, RouteNames } from "../types/router";

export const publicRoutes: IRoute[] = [
  { path: RouteNames.HOME, component: HomePage, titleName: "Home" },
  { path: RouteNames.VIDEO, component: VideoPage, titleName: "Video" },
  { path: RouteNames.GIF, component: GifPage, titleName: "GIF" },
];
