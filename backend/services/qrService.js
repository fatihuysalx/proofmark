const QRCode = require("qrcode");

async function generateQR(qrHash) {
  try {
    const qrDataURL = await QRCode.toDataURL(qrHash);
    return qrDataURL;
  } catch (err) {
    throw new Error("QR oluşturulamadı");
  }
}

module.exports = { generateQR };
