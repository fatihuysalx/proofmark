import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero" data-aos="fade-up">
  <h1>Web3 ile Tedarik Zincirini Yeniden Şekillendir</h1>
  <p>Merkeziyetsiz, güvenilir ve şeffaf bir tedarik zinciri yönetimi.</p>
  <a href="#features" className="btn">Keşfet</a>
  <a href="#features" className="btn">QR okut</a>
</section>


      {/* Özellikler Bölümü */}
      <section id="features" className="features" data-aos="fade-up">
  <div className="feature-card">
    <h2>🚀 Hızlı</h2>
    <p>Blockchain teknolojisi sayesinde işlemler anında tamamlanır.</p>
  </div>
  <div className="feature-card">
    <h2>🔒 Güvenli</h2>
    <p>Kriptografi ile verilerinizi en üst seviyede koruyun.</p>
  </div>
  <div className="feature-card">
    <h2>🌍 Şeffaf</h2>
    <p>Herkes tarafından doğrulanabilir kayıtlarla güveni artırın.</p>
  </div>
</section>

<section className="proofmarker" data-aos="fade-right">
  <h2>ProofMarker Nedir?</h2>
  <p>
    ProofMarker, ürün, hizmet veya teknolojilerinizin dijital olarak
    benzersiz şekilde kimliklendirilmesini ve blockchain üzerinde
    doğrulanabilir hale getirilmesini sağlayan bir sertifikasyon
    çözümüdür. Sahteciliği önleyerek markanızın güvenilirliğini artırır,
    müşteri sadakatini güçlendirir ve itibar kaybı riskini minimize eder.
    Gerçek zamanlı doğrulama sayesinde son kullanıcılar, ürün geçmişine
    anında ulaşabilir.
  </p>
</section>



<section className="chart" data-aos="fade-left">
  <h2>ProofMarker Nasıl Çalışır?</h2>
  <div className="chart-flow">
    <div className="chart-step">
      <span>1</span>
      <p>
        Ürün sisteme eklenir ve benzersiz bir dijital kimlik (hash)
        oluşturulur.
      </p>
    </div>
    <div className="chart-arrow">➡️</div>
    <div className="chart-step">
      <span>2</span>
      <p>
        Bu kimlik, blockchain ağına kaydedilerek değiştirilemez hale
        getirilir.
      </p>
    </div>
    <div className="chart-arrow">➡️</div>
    <div className="chart-step">
      <span>3</span>
      <p>
        Ürüne yerleştirilen QR kod ile kullanıcı, blockchain verilerini
        anında doğrular.
      </p>
    </div>
  </div>
</section>


      {/* Nasıl Çalışır? */}
      <section className="how-it-works" data-aos="fade-up">
  <h2>Nasıl Çalışır?</h2>
  <div className="steps">
    <div className="step">
      <span>1</span>
      <p>Ürün tedarik zincirine eklenir ve blok zincirde doğrulanır.</p>
    </div>
    <div className="step">
      <span>2</span>
      <p>Blockchain ile tüm süreç izlenir ve şeffaf kayıt tutulur.</p>
    </div>
    <div className="step">
      <span>3</span>
      <p>Kullanıcılar QR kod ile ürün geçmişini doğrulayabilir.</p>
    </div>
  </div>
</section>

    </div>
  );
}

export default Home;