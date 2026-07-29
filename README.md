# VTP Check V5

## Overview

VTP Check V5 is a Progressive Web App (PWA) built with HTML, CSS and JavaScript.

Its purpose is to scan Viettel Post screen recording videos, automatically detect shipment numbers, generate QR codes and export all QR codes into a ZIP archive.

The application must work well on iPhone Safari.

---

## Main Workflow

User selects MP4 video

↓

Read video using HTML5 Video

↓

Extract frames every 300 milliseconds

↓

Draw each frame to Canvas

↓

Crop only the shipment number region

↓

Preprocess image
- grayscale
- increase contrast
- sharpen
- threshold

↓

OCR using Tesseract.js

↓

Recognize only shipment numbers

Rules

- exactly 12 digits
- ignore all other text
- remove duplicates

↓

Display detected shipment numbers

↓

Generate QR Code for every shipment number

↓

Export all QR codes into ZIP

---

## Features

### Video

- Select MP4
- Preview video
- Display duration
- Display resolution
- Display scan progress
- Pause
- Resume
- Cancel

---

### OCR

Use Tesseract.js

Recognize only:

```
^[0-9]{12}$
```

Ignore:

- dates
- prices
- phone numbers
- Vietnamese text

Confidence lower than 75%

Discard.

---

### Shipment List

Display

- Total detected
- Valid
- Duplicate
- Invalid

Allow

- Copy All
- Export TXT
- Export CSV

---

### QR

Generate QR using qrcode.js

QR content

Shipment Number only

Example

```
123456789012
```

Display all QR in responsive grid.

---

### ZIP

Use JSZip.

ZIP structure

```
QR/
    123456789012.png
    123456789013.png
    ...
```

---

## UI

Responsive

Optimized for

- iPhone
- Safari

Dark mode

Modern glass design

Progress bar

Animated cards

---

## PWA

manifest.json

service-worker.js

Offline support

Installable

---

## Project Structure

```
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
```

---

## Coding Rules

Use ES6 modules.

Separate business logic.

No duplicated code.

Comment important functions.

No external framework.

Only

- HTML
- CSS
- JavaScript

---

## Performance

Canvas processing

Avoid memory leak

Release frame buffers

Process frames asynchronously

Target

Scan a 3-minute video in less than 40 seconds on modern iPhone.

---

## Final Result

A production-ready PWA that can:

✅ Scan Viettel Post screen recordings

✅ Detect shipment numbers

✅ Remove duplicates

✅ Generate QR codes

✅ Export ZIP

✅ Work offline

✅ Run on iPhone Safari