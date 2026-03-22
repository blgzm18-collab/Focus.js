# **focus.js**  
### *Redact what matters. In the browser.*

**focus.js** is a lightweight, client‑side JavaScript library that lets developers highlight, blur, pixelate, or mask sensitive regions in images (and later videos).  
Everything runs locally in the browser — no uploads, no servers, no privacy risks.

Perfect for screenshots, UI demos, bug reports, documentation, and any situation where sensitive info needs to stay hidden.

---

## ✨ Features (v0.1 – Image MVP)

- 🖼️ **Image highlighting** — draw semi‑transparent boxes to mark sensitive areas  
- 🎯 **Region‑based operations** — define exact coordinates for redaction  
- 💡 **Canvas‑powered** — fast, local, and dependency‑free  
- 🔌 **Zero setup** — works with plain `<img>` elements  
- 🔐 **Privacy‑first** — nothing leaves the user’s device  
- 🧩 **Modular architecture** — video support will be a separate module  

---

## 🚀 Getting Started

### Install (coming soon)
```bash
npm install focus.js
```

For now, clone the repo and import directly:

```html
<script type="module" src="dist/focus.js"></script>
```

---

## 🖍️ Basic Usage (Highlighting)

```js
import { FocusImage } from './src/image/FocusImage.js';

const img = new FocusImage('#myImage');

img.highlight({
  x: 120,
  y: 80,
  width: 200,
  height: 100,
  color: 'rgba(255, 255, 0, 0.4)' // yellow highlight
});

// Export the modified image
const result = img.toDataURL();
```

---

## 📁 Project Structure

```
focus/
  src/
    image/
      FocusImage.js
      effects/
        blur.js
        pixelate.js
        mask.js
    video/
      FocusVideo.js
      effects/
        blur.js
        pixelate.js
        mask.js
    utils/
      canvas.js
      math.js
  dist/
  package.json
  README.md
  LICENSE
```

- **image/** → everything for static images  
- **video/** → future video support (kept separate on purpose)  
- **utils/** → shared helpers  

---

## 🛣️ Roadmap

### **v0.1 — Image Highlighting (current)**
- Load image into canvas  
- Draw highlight regions  
- Export as data URL  

### **v0.2 — Image Redaction Tools**
- Blur regions  
- Pixelate regions  
- Solid mask regions  

### **v0.3 — Interactive Editor**
- Click‑and‑drag region selection  
- Resize handles  
- Region list + editing  

### **v0.4 — Video Frame Redaction**
- Seek to timestamp  
- Redact single frames  
- Export as image  

### **v1.0 — Full Video Redaction**
- Timeline regions  
- Frame‑by‑frame processing  
- Optional ffmpeg.wasm export  

---

## 🤝 Contributing

Contributions are welcome!  
Open an issue, submit a PR, or share ideas for new features.

---

## 📄 License

This project is licensed under the **MIT License** — free to use, modify, and distribute.

---

## ❤️ About the Project

focus.js is built with a simple goal:  
**give developers and users a fast, private, and intuitive way to hide sensitive information without relying on external services.**

Everything happens locally.  
Your data stays yours.

---
