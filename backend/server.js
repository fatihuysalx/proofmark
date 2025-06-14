require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const sha256 = require("js-sha256");
const qrcode = require("qrcode");

const scanRoutes = require("./routes/scan");
const uploadRoute = require("./routes/upload");
const { getActiveWallets } = require("./services/walletService");
const { writeToStellar } = require("./services/stellarService");

const Product = require("./models/product");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/scans", scanRoutes);
app.use("/upload", uploadRoute);

// ✅ Mongo bağlantısı
mongoose.connect("mongodb://127.0.0.1:27017/proofmark")
  .then(() => console.log("MongoDB bağlantısı başarılı"))
  .catch(err => console.error("MongoDB bağlantı hatası:", err));

// ✅ Aktif cüzdanları getir
app.get("/wallets", async (req, res) => {
  try {
    const wallets = await getActiveWallets();
    res.json(wallets);
  } catch (err) {
    res.status(500).json({ error: "Wallet verisi alınamadı" });
  }
});

// ✅ Yeni ürün ekle
app.post("/products", async (req, res) => {
  try {
    const { name, qrHash, description } = req.body;
    const newProduct = new Product({ name, qrHash, description });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.error("Ürün ekleme hatası:", err);
    res.status(500).json({ error: "Ürün eklenemedi" });
  }
});

// ✅ Tüm ürünleri getir
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Veriler alınamadı" });
  }
});

// ✅ QR hash ile ürün detayını getir
app.get("/products/:qrHash", async (req, res) => {
  try {
    const product = await Product.findOne({ qrHash: req.params.qrHash });
    if (!product) return res.status(404).json({ error: "Ürün bulunamadı" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Veri alınamadı" });
  }
});

// ✅ QR görseli üret (base64 PNG döner)
const { generateQR } = require("./services/qrService");
app.get("/qr/:qrHash", async (req, res) => {
  try {
    const qrImage = await generateQR(req.params.qrHash);
    res.send(`<img src="${qrImage}" />`);
  } catch (err) {
    res.status(500).json({ error: "QR üretilemedi" });
  }
});

// ✅ Identifier al, hashle, QR üret
app.post("/generate-qr", async (req, res) => {
  const { identifier } = req.body;
  if (!identifier) return res.status(400).send("No identifier");

  const hash = sha256(identifier);
  const qrData = await qrcode.toDataURL(hash);
  res.json({ qr: qrData });
});

// 🆕 ✅ STELLAR ENTEGRASYONU — zincire hash yaz
app.post("/stellar", async (req, res) => {
  const { qrHash } = req.body;
  if (!qrHash) return res.status(400).json({ error: "qrHash zorunlu" });

  try {
    const txHash = await writeToStellar(qrHash);
    res.json({ success: true, txHash });
  } catch (err) {
    console.error("Stellar yazım hatası:", err);
    res.status(500).json({ error: "Stellar zincire yazılamadı", details: err.message });
  }
});

// ✅ Server başlatılıyor
app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});
