import React from "react";
import "./QRScanner.css";

function QRScanner() {
  return (
    <div className="qr-container">
      <section className="qr-hero" data-aos="fade-up">
        <h1>Ürününü Doğrula</h1>
        <p>Ürünün üzerindeki QR kodu tarayarak orijinalliğini kontrol et.</p>
      </section>

      <section className="qr-display" data-aos="zoom-in">
        <div className="qr-box">
          <div className="qr-frame">
            <p>📷 QR Kodu Kameraya Getirin</p>
            <div className="scanner-line" />
          </div>
        </div>
      </section>

      <section className="qr-info" data-aos="fade-up">
        <h2>Neden QR Kod Tarama?</h2>
        <ul>
          <li>✅ Gerçek ürün mü anında öğren</li>
          <li>🔐 Blockchain tabanlı güvenilirlik</li>
          <li>🧾 Sahiplik ve geçmişe erişim</li>
        </ul>
      </section>
    </div>
  );
}

export default QRScanner;
