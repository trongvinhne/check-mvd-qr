# COPILOT INSTRUCTIONS

## Goal

Build a production-ready Progressive Web App named **VTP Check V5**.

The application scans Viettel Post screen recordings and automatically extracts shipment numbers.

The entire application must be written in plain HTML, CSS and JavaScript.

No framework.

Use ES Modules.

-----------------------------------

# Required Features

## Video

User selects an MP4 file.

Display:

- filename
- size
- duration
- resolution

Preview video.

Extract frames every 300ms.

Use HTML5 Video + Canvas.

Never OCR directly from the video element.

Always OCR from Canvas.

-----------------------------------

# Image Processing

Before OCR:

1. Crop shipment-number area.
2. Convert to grayscale.
3. Increase contrast.
4. Sharpen.
5. Threshold.
6. Remove noise.

-----------------------------------

# OCR

Use Tesseract.js.

Recognize only shipment numbers.

Shipment number rules:

- exactly 12 digits
- regex:

^[0-9]{12}$

Ignore:

- dates
- prices
- phone numbers
- Vietnamese text
- labels

Confidence must be >=75%.

Otherwise discard.

-----------------------------------

# Duplicate Removal

Maintain a Set().

Do not allow duplicate shipment numbers.

-----------------------------------

# UI

Modern glass UI.

Dark mode.

Responsive.

Optimized for iPhone Safari.

Cards.

Progress bar.

Statistics.

Buttons:

- Scan
- Stop
- Continue
- Copy
- Export TXT
- Export CSV
- Export ZIP

-----------------------------------

# QR

Generate QR using qrcode.js.

QR content:

Shipment number only.

PNG output.

-----------------------------------

# ZIP

Use JSZip.

Structure:

QR/

123456789012.png

123456789013.png

...

-----------------------------------

# PWA

Create

manifest.json

service-worker.js

Offline support.

Installable.

-----------------------------------

# Project Structure

index.html

style.css

script.js

manifest.json

service-worker.js

js/

video.js

image.js

ocr.js

qr.js

zip.js

ui.js

utils.js

libs/

tesseract.min.js

qrcode.min.js

jszip.min.js

-----------------------------------

# Coding Rules

Small modules.

ES6.

No duplicate code.

Comment important functions.

Readable variable names.

-----------------------------------

# Performance

Process frames asynchronously.

Avoid memory leaks.

Release ImageBitmap.

Reuse Canvas.

Target:

3-minute video

less than 40 seconds.

-----------------------------------

# Error Handling

Show friendly errors for:

Unsupported file

OCR failure

No shipment found

ZIP generation failure

-----------------------------------

# Final Result

The project must be production-ready.

Every button must work.

No placeholder code.

No TODO comments.

No fake implementation.

Generate complete working code.