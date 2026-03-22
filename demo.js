import { FocusImage } from "../src/image/FocusImage.js";

const canvas = document.getElementById("previewCanvas");
const input = document.getElementById("imageInput");

const editor = new FocusImage(canvas);

input.addEventListener("change", async e => {
  const file = e.target.files[0];
  if (file) {
    await editor.load(file);
  }
});
