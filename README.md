# **focus.js**  

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![Made by Cove Labs](https://img.shields.io/badge/Made%20by-Cove%20Labs-1E90FF)

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

---

## 🔍 Video Export (Optional Integration)


focus.js does not include video encoding or export by default.
Instead, it provides a clean canvas-based redaction layer that can be attached to external encoders.
If you want to export redacted videos, you can integrate tools like:
- ffmpeg.wasm (github.com in Bing) — full video encoding in the browser
- MediaRecorder API (developer.mozilla.org in Bing) — record canvas output as WebM
- Custom pipelines using canvas frame capture
This keeps focus.js lightweight and modular — you handle redaction, they handle export.

---

## 🤝 Contributing


Contributions are welcome!  
Open an issue, submit a PR, or share ideas for new features.

---

## 📄 License (MIT — What This Means)

focus.js is released under the MIT License, which is one of the most permissive open‑source licenses available.

## ✅ You CAN:

- Use the code in personal, commercial, or enterprise projects

- Modify the code however you want

- Distribute your modified or unmodified versions

- Sell software that includes focus.js

- Integrate it into closed‑source or proprietary applications

- Attach your own video export pipeline (ffmpeg.wasm, MediaRecorder, etc.)
  
## ❗ You MUST:

- Include the original MIT license in any copy or distribution

- Include the copyright notice (“Copyright © 2026 Fhabian / Cove Labs”)
 
## 🚫 You CANNOT:

- Hold the author liable for any damages

- Claim the original authors endorse your product

- Remove the license from redistributed versions

---

That’s it.

MIT is intentionally simple — maximum freedom with minimal restrictions.

---

## ❤️ About the Project

focus.js was created with a clear purpose:
give developers and everyday users a fast, private, and intuitive way to hide sensitive information — without relying on external services or cloud uploads.

Your images stay on your device.
Your videos stay in your browser.
Your data stays yours.

This project reflects the core philosophy of Cove Labs:
build tools that empower creativity, protect privacy, and stay lightweight enough for anyone to use.
