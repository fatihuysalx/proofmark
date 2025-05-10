import React from "react";
import "./About.css";
import fatihLogo from "../assets/fatih.jpg";
import solanaLogo from "../assets/solana.jpg";
import stellarLogo from "../assets/stellar.jpg";


function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero" data-aos="fade-up">
  <h1>Biz Kimiz?</h1>
  <p>Blockchain tabanlı tedarik zinciri çözümleri sunan yenilikçi bir ekibiz</p>
</section>


      {/* Misyon & Vizyon */}
      <section className="project-mission" data-aos="fade-up">
  <h2>Projemizin Katkıları</h2>
  <div className="mission-cards">
    <div className="mission-card">
      <h3>🌿 Sürdürülebilirlik</h3>
      <p>Blockchain ile tedarik zincirlerinde şeffaflık sağlayarak israfı azaltıyoruz.</p>
    </div>
    <div className="mission-card">
      <h3>🔒 Güvenilirlik</h3>
      <p>Veri manipülasyonunu önleyerek tüketici güvenini artırıyoruz.</p>
    </div>
    <div className="mission-card">
      <h3>🌍 Küresel Etki</h3>
      <p>Yeşil dünya için sürdürülebilir çözümler sunuyoruz.</p>
    </div>
  </div>
</section>



      {/* Ekip */}
      <section className="team" data-aos="fade-right">
  <h2>Ekibimiz</h2>
  <div className="team-members">
    <div className="member">
      <div
        className="member-img" style={{ backgroundImage: `url(${fatihLogo})` }}
      ></div>
      <h3>Fatih Muhammet Uysal</h3>
      <p>Kurucu & CEO</p>
      <p>Blockchain Developer</p>
    </div>
  </div>
</section>



      {/* Tarihçe */}
      <section className="timeline" data-aos="fade-left">
  <h2>Tarihçemiz</h2>
  <div className="timeline-container">
    <div className="timeline-item">
      <div className="timeline-date">Ocak 2025</div>
      <div className="timeline-content">
        <h3>Proje Başlangıcı</h3>
        <p>Blockchain tabanlı tedarik zinciri çözümümüzün temellerini attık.</p>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-date">Mart 2025</div>
      <div className="timeline-content">
        <h3>İlk Prototip</h3>
        <p>İlk çalışan prototipimizi tamamladık ve testlere başladık.</p>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-date">Nisan 2025</div>
      <div className="timeline-content">
        <h3>Toplulukla Paylaşım</h3>
        <p>Projemizi toplulukla paylaşarak geri bildirim toplamaya başladık.</p>
      </div>
    </div>
  </div>
</section>


      {/* Ortaklar */}
      <section className="partners" data-aos="fade-up">
      <h2>Ortaklarımız</h2>
  <div className="partner-logos">
    <div className="partner-logo" style={{ backgroundImage: `url(${fatihLogo})` }}></div>
    <div className="partner-logo" style={{ backgroundImage: `url(${solanaLogo})` }}></div>
    <div className="partner-logo" style={{ backgroundImage: `url(${stellarLogo})` }}></div>
  </div>
</section>

      {/* CTA */}
      <section className="about-cta" data-aos="zoom-in">
        <h2>Ekibimizin Bir Parçası Olmak İster misiniz?</h2>
        <a href="/contact" className="btn">
          İletişime Geçin
        </a>
      </section>
    </div>
  );
}

export default About;