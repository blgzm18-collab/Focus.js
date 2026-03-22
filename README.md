<h1 align="center" style="
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(90deg, #1e90ff, #00eaff);
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 
    0 0 10px rgba(0, 234, 255, 0.6),
    0 0 20px rgba(0, 234, 255, 0.6),
    0 0 40px rgba(0, 234, 255, 0.6);
">
  focus.js
</h1>

---

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="MIT License">
  <img src="https://img.shields.io/badge/Status-Active-brightgreen" alt="Project Status">
  <img src="https://img.shields.io/badge/Made%20by-Cove%20Labs-1E90FF" alt="Cove Labs">
  <img src="https://img.shields.io/badge/Privacy-Local%20Only-ff69b4" alt="Privacy Badge">
  <img src="https://img.shields.io/badge/Focus-Redaction%20Tools-8A2BE2" alt="Focus Tools">
</p>

## Redact what matters — instantly, and entirely in your browser.

<b>focus.js</b> is a lightweight, privacy‑first JavaScript library for highlighting, blurring, pixelating, or masking sensitive regions in images — with video support on the way.

Everything runs <b>locally</b>, powered by the browser’s canvas API. No uploads. No servers. No external processing. Just fast, intuitive redaction that keeps your data exactly where it belongs: <b>with you</b>.

Whether you're preparing screenshots, UI demos, bug reports, documentation, or sharing content that contains personal information, focus.js gives you a clean, modern toolkit to hide what needs hiding — without slowing you down.


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

Installation <b>(coming soon)</b>

```
npm install focus.js
```


Until the first npm release is published, you can clone the repository and import the library directly:
```
<script type="module" src="dist/focus.js"></script>
```

This gives you immediate access to the core redaction tools while development continues toward the first stable release

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

focus.js does not include a built‑in video exporter.
Instead, it provides a canvas‑based redaction layer that you can attach to any encoding pipeline you prefer.

<b>This means:</b>

- focus.js handles the redaction

- you (or other developers) handle the export
  
<b>If you want to export redacted videos, you can integrate tools like:</b>

- ffmpeg.wasm — full video encoding directly in the browser
  
- MediaRecorder API — record the redacted canvas stream as WebM
  
- Custom pipelines — capture frames and encode them however you like
  
This design keeps focus.js lightweight, modular, and privacy‑first.
You stay in control of how the final video is encoded, stored, or shared.

---

## 🤝 Contributing

Contributions are always welcome — whether you're fixing a bug, improving documentation, or adding new features.

<b>How to Contribute</b>
  
- Fork the repository
  
- Create a new branch for your feature or fix
  
- Commit your changes with clear messages
  
- Open a pull request describing what you changed and why
  
<b>Contribution Guidelines</b>

- Keep code clean, readable, and modular
  
- Follow the project's privacy‑first philosophy
  
- Be respectful and constructive in discussions
  
- Make sure your changes don’t break existing functionality

- Include the MIT license header in new files when appropriate

If you're unsure where to start, check the Issues tab for tasks labeled good first issue or help wanted.

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

## 🧠 Why MIT?

focus.js uses the MIT License because it reflects the values behind Cove Labs:

- Maximum freedom — developers can use, modify, and integrate the library in any project

- Commercial‑friendly — studios, companies, and indie devs can ship products with it
  
- No gatekeeping — no restrictive clauses, no legal friction, no hidden obligations
  
- Privacy‑aligned — keeping the library simple and local means no cloud dependencies
  
- Community‑driven — anyone can contribute, fork, or build tools on top of it

MIT ensures focus.js stays accessible, open, and future‑proof — exactly how a privacy‑first tool should be
---

That’s it.

MIT is intentionally simple — maximum freedom with minimal restrictions.

---

## 📜 Code of Conduct

To keep the focus.js community welcoming and productive, we follow a few simple principles:

1. Be Respectful
Treat everyone with kindness. Disagreements happen — hostility doesn’t need to.

3. Be Constructive
Offer feedback that helps the project grow. Critique ideas, not people.

4. Be Inclusive
Everyone is welcome — beginners, experts, hobbyists, and professionals.

5. No Harassment
Any form of harassment, discrimination, or abusive behavior is not tolerated.

6. Keep Discussions Relevant
Stay on topic and keep conversations focused on improving the project.

7. Protect Privacy
Do not share sensitive data, personal information, or private content in issues or discussions.

8. Follow the License
Respect the MIT License and include it when redistributing the project.
If someone violates these guidelines, maintainers may take appropriate action, including warnings or removal from discussions.

---

## ❤️ About the Project

focus.js was created with a clear purpose:
give developers and everyday users a fast, private, and intuitive way to hide sensitive information — without relying on external services or cloud uploads.

Your images stay on your device.
Your videos stay in your browser.
Your data stays yours.

This project reflects the core philosophy of Cove Labs:
build tools that empower creativity, protect privacy, and stay lightweight enough for anyone to use.

---

## 📬 Contact

If you have questions, suggestions, or want to contribute to focus.js, feel free to reach out:
Primary Email:

## 📧 gzmbl18@gmail.com

Secondary Email (checked less frequently):

## 📧 Jw4Lk3r16@hotmail.com

Whether you're reporting a bug, proposing a feature, or just saying hi, you're welcome to reach out anytime.

---

