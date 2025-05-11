import React, { useEffect, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import "./QRScanner.css";

function QRScanner() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5Qrcode("reader");
    scanner
      .start(
        { facingMode: "environment" },
        {
          fps: 10,
          qrbox: 250,
        },
        (decodedText) => {
          setResult(decodedText);
          scanner.stop();
        },
        () => {} // hata fonksiyonu boş geçildi
      )
      .catch((err) => console.error("Kamera başlatılamadı", err));

    return () => {
      scanner.clear();
    };
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const scanner = new Html5Qrcode("reader");
    scanner
      .scanFile(file, true)
      .then((decodedText) => setResult(decodedText))
      .catch((error) => alert("QR kod okunamadı: " + error));
  };

  return (
    <div className="qr-container">
      <section className="qr-hero">
        <h1>QR Kodunu Tara veya Yükle</h1>
        <p>Ürün doğrulaması için QR kodu kameradan okut ya da resim seç.</p>
      </section>

      <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
        <div id="reader" style={{ width: "300px" }} />
        <input type="file" accept="image/*" onChange={handleImageUpload} style={{ marginTop: "20px" }} />
      </div>

      {result && (
        <div style={{ marginTop: "30px", textAlign: "center", color: "lime" }}>
          <h2>📦 QR Sonucu</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default QRScanner;
