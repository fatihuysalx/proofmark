const express = require("express");
const Jimp = require("jimp");
const QrCode = require("qrcode-reader");
const upload = require("../upload");

const router = express.Router();

router.post("/", upload.single("qrImage"), async (req, res) => {
  try {
    const image = await Jimp.read(req.file.buffer);
    const qr = new QrCode();

    qr.callback = (err, value) => {
      if (err) return res.status(400).json({ error: "QR okunamadı" });
      res.json({ qrCode: value.result });
    };

    qr.decode(image.bitmap);
  } catch (error) {
    res.status(500).json({ error: "Sunucu hatası" });
  }
});

module.exports = router;
