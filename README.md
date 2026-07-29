Create a complete Progressive Web App using HTML, CSS and JavaScript.

Requirements:

- User selects an MP4 screen recording from Viettel Post.
- Read the video using HTML5 video and Canvas.
- Extract frames every 300ms.
- Crop the shipment number region.
- Use Tesseract.js OCR.
- Recognize only 12-digit shipment numbers.
- Remove duplicates.
- Display all detected shipment numbers.
- Generate QR codes using qrcode.js.
- Export all QR images into a ZIP using JSZip.
- Show scanning progress.
- Responsive UI for iPhone Safari.
- Offline support with manifest.json and service worker.
- Organize code into:
  index.html
  style.css
  script.js
  js/video.js
  js/ocr.js
  js/qr.js
  js/zip.js
- Make the application production-ready.