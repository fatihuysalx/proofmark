const express = require("express");
const router = express.Router();
const Scan = require("../models/Scan");

router.post("/scan", async (req, res) => {
  const { qrCode, stage } = req.body;
  try {
    const scanData = new Scan({ qrCode, stage, timestamp: new Date() });
    await scanData.save();
    res.status(200).json({ message: "Scan saved", data: scanData });
  } catch (err) {
    res.status(500).json({ message: "Error saving scan", error: err });
  }
});

module.exports = router;
