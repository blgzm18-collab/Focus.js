import { loadImage } from "../utils/canvas.js";
import { blur } from "./effects/blur.js";
import { mask } from "./effects/mask.js";
import { pixelate } from "./effects/pixelate.js";

export class FocusImage {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.image = null;
  }

  async load(file) {
    this.image = await loadImage(file);
    this.canvas.width = this.image.width;
    this.canvas.height = this.image.height;
    this.ctx.drawImage(this.image, 0, 0);
  }
}
