const express = require("express");
const mongoose = require("mongoose");
const sha256 = require("js-sha256");
const qrcode = require("qrcode");
const scanRoutes = require("./routes/scan");
const uploadRoute = require("./routes/upload");
const { getActiveWallets } = require("./services/walletService");
const Product = require("./models/product");
const { initializeProofOnChain } = require("./services/anchorService");


const app = express();
const PORT = 5001;

app.use(express.json());
app.use("/scans", scanRoutes);
app.use("/upload", uploadRoute);

mongoose.connect("mongodb://127.0.0.1:27017/proofmark")
  .then(() => console.log("MongoDB bağlantısı başarılı"))
  .catch(err => console.error("MongoDB bağlantı hatası:", err));

app.get("/wallets", async (req, res) => {
  try {
    const wallets = await getActiveWallets();
    res.json(wallets);
  } catch (err) {
    res.status(500).json({ error: "Wallet verisi alınamadı" });
  }
});

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

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Veriler alınamadı" });
  }
});

app.get("/products/:qrHash", async (req, res) => {
  try {
    const product = await Product.findOne({ qrHash: req.params.qrHash });
    if (!product) return res.status(404).json({ error: "Ürün bulunamadı" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Veri alınamadı" });
  }
});

const { generateQR } = require("./services/qrService");

app.get("/qr/:qrHash", async (req, res) => {
  try {
    const qrImage = await generateQR(req.params.qrHash);
    res.send(`<img src="${qrImage}" />`);
  } catch (err) {
    res.status(500).json({ error: "QR üretilemedi" });
  }
});

app.post("/generate-qr", async (req, res) => {
  const { identifier } = req.body;
  if (!identifier) return res.status(400).send("No identifier");

  const hash = sha256(identifier);
  const qrData = await qrcode.toDataURL(hash);
  res.json({ qr: qrData });
});

app.post("/solana", async (req, res) => {
  const { qrHash } = req.body;
  if (!qrHash) return res.status(400).json({ error: "qrHash zorunlu" });

  try {
    const txHash = await initializeProofOnChain(qrHash);
    res.json({ success: true, txHash });
  } catch (err) {
    console.error("Solana yazım hatası:", err);
    res.status(500).json({ error: "Solana zincire yazılamadı", details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});
