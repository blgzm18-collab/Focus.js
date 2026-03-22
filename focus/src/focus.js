import { FocusImage } from "./image/FocusImage.js";
import { FocusVideo } from "./video/FocusVideo.js";

export const focus = {
  image: (canvas) => new FocusImage(canvas),
  video: (videoElement, canvas) => new FocusVideo(videoElement, canvas)
};
