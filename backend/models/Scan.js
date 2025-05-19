const mongoose = require("mongoose");

const ScanSchema = new mongoose.Schema({
  qrCode: String,
  stage: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Modeli güvenli şekilde tanımlar (overwrite hatasını engeller)
module.exports = mongoose.models.Scan || mongoose.model("Scan", ScanSchema);
