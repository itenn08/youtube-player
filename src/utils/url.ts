export const getUrlVideo = (url: string) => {
  return url.split("v=")[1]?.split("&")[0];
};
