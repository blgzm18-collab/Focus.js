import { loadImage } from "../utils/canvas.js";

export class FocusImage {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.image = null;

    // highlight state
    this.isHighlighting = false;
    this.startX = 0;
    this.startY = 0;
    this.currentRect = null;
  }

  async load(file) {
    this.image = await loadImage(file);

    this.canvas.width = this.image.width;
    this.canvas.height = this.image.height;

    this.ctx.drawImage(this.image, 0, 0);
  }

  getMousePos(e) {
    const rect = this.canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

  startHighlight(e) {
    if (!this.image) return;

    this.isHighlighting = true;
    const pos = this.getMousePos(e);
    this.startX = pos.x;
    this.startY = pos.y;
  }

  updateHighlight(e) {
    if (!this.isHighlighting || !this.image) return;

    const pos = this.getMousePos(e);

    this.currentRect = {
      x: Math.min(this.startX, pos.x),
      y: Math.min(this.startY, pos.y),
      w: Math.abs(pos.x - this.startX),
      h: Math.abs(pos.y - this.startY)
    };

    // redraw image
    this.ctx.drawImage(this.image, 0, 0);

    // draw highlight
    this.ctx.fillStyle = "rgba(255, 255, 0, 0.35)";
    this.ctx.fillRect(
      this.currentRect.x,
      this.currentRect.y,
      this.currentRect.w,
      this.currentRect.h
    );

    this.ctx.strokeStyle = "rgba(255, 255, 0, 0.9)";
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(
      this.currentRect.x,
      this.currentRect.y,
      this.currentRect.w,
      this.currentRect.h
    );
  }

  finishHighlight() {
    this.isHighlighting = false;
    this.currentRect = null;
  }
}
