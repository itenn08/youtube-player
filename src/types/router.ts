export interface IRoute {
  path: string;
  component: React.ComponentType;
  titleName: string;
}

export enum RouteNames {
  HOME = "/",
  VIDEO = "/video",
  GIF = "/gif",
}

export enum RouteNamesByLink {
  "/" = "home",
  "/video" = "video",
  "/gif" = "gif",
}
