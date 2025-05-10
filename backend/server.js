const express = require("express");
const mongoose = require("mongoose");
const ProofmarkKey = require("./models/ProofmarkKey");
const { getActiveWallets } = require("./services/walletService");
const Product = require("./models/product");

const app = express();
const PORT = 3000;

app.use(express.json());

// MongoDB bağlantısı
mongoose.connect("mongodb://127.0.0.1:27017/proofmark")
  .then(() => console.log("MongoDB bağlantısı başarılı"))
  .catch(err => console.error("MongoDB bağlantı hatası:", err));

// ✅ Cüzdanları listele
app.get("/wallets", async (req, res) => {
  try {
    const wallets = await getActiveWallets();
    res.json(wallets);
  } catch (err) {
    res.status(500).json({ error: "Wallet verisi alınamadı" });
  }
});


// ✅ Ürün ekleme (POST /products)
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


// ✅ Tüm ürünleri listeleme (GET /products)
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Veriler alınamadı" });
  }
});

// ✅ QR hash'e göre ürün çekme (GET /products/:qrHash)
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



app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});
