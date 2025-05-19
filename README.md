# 🛡️ ProofMark - Blockchain Based Product Verification Platform

## 🔍 Project Purpose

ProofMark aims to verify the authenticity of physical products through QR codes, backed by blockchain. Consumers can scan a product’s QR code to instantly view its verification history and production path securely.

---

## 📊 How the System Works (Overview)

![System Flowchart](https://raw.githubusercontent.com/fatihuysalx/proofmark/main/client/public/images/system-diagram.png)

---

## 🌐 Live Preview Screenshots

> ✅ Visual references of the platform: Homepage, Scan Page, Blockchain Page, Workflow Explanation, Contact Page, and ProofMark Logo.

|                                                                                                                            |                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| ![Homepage](https://raw.githubusercontent.com/fatihuysalx/proofmark/main/client/public/images/5861645132653250545.jpg)     | ![About Us](https://raw.githubusercontent.com/fatihuysalx/proofmark/main/client/public/images/5861645132653250546.jpg)             |
| ![Scan QR](https://raw.githubusercontent.com/fatihuysalx/proofmark/main/client/public/images/5861645132653250547.jpg)      | ![Blockchain Guarantee](https://raw.githubusercontent.com/fatihuysalx/proofmark/main/client/public/images/5861645132653250548.jpg) |
| ![Contact Page](https://raw.githubusercontent.com/fatihuysalx/proofmark/main/client/public/images/5861645132653250549.jpg) | ![Logo](https://raw.githubusercontent.com/fatihuysalx/proofmark/main/client/public/images/logo.jpg)                                |

---

## 🚀 Features

* ✅ **QR Code Generation** with SHA-256 hashing.
* ✅ **Scan Tracking** across multiple stages (e.g., production, warehouse, consumer).
* ✅ **Blockchain Vision**: NFT-based ownership & authenticity validation (future).
* ✅ **Product Database** with history.
* ✅ **Image Upload & QR Reader**.
* ✅ **Future Camera-based Node Integration**.

---

## ⚙️ Technologies Used

| Layer        | Tech Stack                |
| ------------ | ------------------------- |
| Frontend     | React, Vite, Tailwind CSS |
| Backend      | Node.js, Express          |
| Database     | MongoDB, Mongoose         |
| Hashing      | js-sha256                 |
| QR Generator | qrcode                    |
| Upload       | multer                    |
| Blockchain   | (Future) Solana, Anchor   |

---

## 🛠️ Installation & Setup

### 🔧 Requirements

* Node.js v18.19.1+
* npm or yarn
* MongoDB installed locally (or use MongoDB Atlas)

### 📁 Project Structure

```
proofmarkFinal/
├── client/                 # React frontend
├── backend/                # Node.js backend
│   ├── routes/             # Express routes (e.g., scan.js, upload.js)
│   ├── models/             # Mongoose schemas (e.g., Scan, Product)
│   ├── services/           # Utility services (e.g., qrService)
│   ├── server.js           # Main server entry
```

### 🚀 Start Project

```bash
# 1. MongoDB başlat
mongod

# 2. Backend başlat
cd backend
npm install
node server.js

# 3. Frontend başlat
cd client
npm install
npm run dev
```

---

## 📦 API Routes Summary

### 📅 POST /generate-qr

Generate a new QR code with hashed content.

### 📅 POST /products

Add a new product (with hash & description).

### 📅 POST /upload

Upload a file (used for QR code image reading).

### 📅 POST /scans

Save scan history (stage: production, warehouse, consumer).

### 📤 GET /products

List all products.

### 📤 GET /products/\:qrHash

Find a specific product.

### 📤 GET /scans/\:qrCode

View full scan history.

### 📤 GET /qr/\:qrHash

Get a QR image.

---

## 🧠 Special Contributions & AI Use

> **ProofMark's database structure and scan logic were significantly refined with AI assistance**, especially for multi-stage scanning.

Project was developed by a solo developer with iterative support and idea shaping aided by AI, specifically in the following areas:

* Mongoose schema relationships
* Backend route planning
* QR scan logic for single/multiple scan phases

---

## 🛡️ Future Roadmap

* [ ] 📱 Mobile optimization
* [ ] 🔐 NFT minting on Solana for each product
* [ ] 🛡️ Real-time socket-based scan tracking
* [ ] 🎨 Admin dashboard with scan heatmaps

---

## 📘 License

MIT License. You can use, modify, or contribute freely.

---

## 📌 Developer Info & Contacts

| Platform     | Link                                                                                               |
| ------------ | -------------------------------------------------------------------------------------------------- |
| 🔗 Twitter/X | [https://x.com/ProofMarkChain](https://x.com/ProofMarkChain)                                       |
| 👔 LinkedIn  | [https://www.linkedin.com/in/fatihmuhammetuysal/](https://www.linkedin.com/in/fatihmuhammetuysal/) |
| 💻 GitHub    | [https://github.com/fatihuysalx](https://github.com/fatihuysalx)                                   |

> Feel free to fork the project or reach out if you plan to extend it.
