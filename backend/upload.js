// backend/upload.js
const multer = require("multer");

// Store files in memory; you can switch to disk storage if needed
const storage = multer.memoryStorage();

const upload = multer({ storage });

module.exports = upload;
