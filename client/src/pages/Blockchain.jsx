import React from "react";
import "./Blockchain.css";

function Blockchain() {
  return (
    <div className="blockchain-container">
      <section className="blockchain-hero" data-aos="fade-up">
        <h1>Blockchain ile Orijinalliği Garanti Altına Alın</h1>
        <p>
          ProofMark, Solana veya Stellar blockchain teknolojisini kullanarak ürünlerinize dijital bir kimlik kazandırır.
          <br />
          Tercih sizin. Kontrol sizde. Güvence her zaman bizde.
        </p>
      </section>

      <section className="system-how-it-works" data-aos="fade-up">
        <h2>Sistem Nasıl Çalışıyor?</h2>
        <ol className="system-steps">
          <li>
            <strong>QR Oluşturma:</strong> Her ürün için özel bir QR kodu oluşturulur ve içine rastgele bir OID (On-chain ID) eklenir.
          </li>
          <li>
            <strong>Fiziksel Etiketleme:</strong> QR kodu, ürün kutusuna veya fabrikada fiziksel olarak yapıştırılır.
          </li>
          <li>
            <strong>Blockchain Sorgusu:</strong> QR okutulduğunda, seçilen blockchain ağına (Solana/Stellar) sorgu yapılır.
          </li>
          <li>
            <strong>Doğrulama:</strong> İmza, zaman damgası, ürün kimliği ve firma imzası doğrulanır.
          </li>
          <li>
            <strong>Sonuç:</strong> Tüketici ekranında anında "Orijinal ürün" veya "Kopya ürün" bilgisi görüntülenir.
          </li>
        </ol>
      </section>

      <section className="blockchain-support" data-aos="fade-up">
        <h2>ProofMark Blockchain Destekleri</h2>
        <p>Aşağıdaki iki zincirden birini seçerek sisteminizi başlatabilirsiniz:</p>
      </section>

      <section className="blockchain-option solana" data-aos="fade-right">
        <h3>🟢 Seçenek 1: Solana</h3>
        <h4>🔧 Teknik Özellikler:</h4>
        <ul>
          <li>Yüksek hız (65.000 TPS+)</li>
          <li>Anchor (Rust) ile yazılmış Akıllı Sözleşmeler</li>
          <li>On-chain imza, ürün meta verisi ve zaman damgası</li>
          <li>Değiştirilemez kayıtlar</li>
        </ul>
        <h4>💰 Maliyet:</h4>
        <p>Ortalama işlem ücreti: 0.00001 – 0.0001 SOL (~$0.0003 USD)</p>
        <p>NFT entegrasyonu: ✔️ mevcut</p>
        <p>Arşivleme, geçmiş sorgulama: ✔️</p>
        <h4>🎯 Kimler İçin Uygun?</h4>
        <ul>
          <li>Hacmi yüksek, ürün sayısı fazla olan markalar</li>
          <li>Ayakkabı, giyim, aksesuar sektörlerinde yer alan firmalar</li>
          <li>NFT ile markalama yapmak isteyen yenilikçi markalar</li>
        </ul>
      </section>

      <section className="blockchain-option stellar" data-aos="fade-left">
        <h3>🔵 Seçenek 2: Stellar</h3>
        <h4>🔧 Teknik Özellikler:</h4>
        <ul>
          <li>Çok düşük işlem maliyeti</li>
          <li>JSON blob formatında ürün verisi saklama</li>
          <li>Light node mimarisi ile hızlı doğrulama</li>
          <li>Tak-çalıştır yapı, düşük donanım ihtiyacı</li>
        </ul>
        <h4>💰 Maliyet:</h4>
        <p>Ortalama işlem ücreti: 0.00001 – 0.00003 XLM (~$0.0001 USD)</p>
        <p>NFT yok, sadece veri doğrulama</p>
        <p>İşlemler anlık görünür</p>
        <h4>🎯 Kimler İçin Uygun?</h4>
        <ul>
          <li>Kozmetik, ilaç, gıda gibi hassas sektörler</li>
          <li>Regülasyona uygunluk ve şeffaf kayıt isteyen firmalar</li>
          <li>Hafif ve hızlı entegrasyon isteyen operasyonlar</li>
        </ul>
      </section>

      <section className="blockchain-comparison" data-aos="fade-up">
        <h2>📈 Avantajlar – Hangi Zincir Sizin İçin Daha Uygun?</h2>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Özellikler</th>
              <th>Solana</th>
              <th>Stellar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hız</td>
              <td>⚡ Çok yüksek (65k TPS)</td>
              <td>🚀 Yüksek (5k TPS)</td>
            </tr>
            <tr>
              <td>NFT Desteği</td>
              <td>✅ Var</td>
              <td>❌ Yok</td>
            </tr>
            <tr>
              <td>Maliyet</td>
              <td>$0.0001 – $0.001</td>
              <td>$0.00005 – $0.0001</td>
            </tr>
            <tr>
              <td>Entegrasyon</td>
              <td>Rust / Anchor</td>
              <td>JSON / WebAPI</td>
            </tr>
            <tr>
              <td>Kullanım Alanı</td>
              <td>Lüks ürün, moda, spor, lifestyle</td>
              <td>İlaç, kozmetik, kimyasal</td>
            </tr>
            <tr>
              <td>Doğrulama</td>
              <td>✔️ Blockchain tarama ile</td>
              <td>✔️ Doğrudan sorgulama</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Blockchain;
