import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <section className="contact-hero" data-aos="fade-up">
        <h1>Bizimle İletişime Geçin</h1>
        <p>Her zaman yanınızdayız. Aşağıdaki bilgilerden bize ulaşabilirsiniz.</p>
      </section>

      <section className="contact-info" data-aos="fade-up">
        <div className="contact-card">
          <h3>📧 E-posta</h3>
          <p><a href="mailto:fatihmuhammetuysal@gmail.com">fatihmuhammetuysal@gmail.com</a></p>
        </div>
        <div className="contact-card">
          <h3>📞 Telefon</h3>
          <p><a href="tel:+905424918239">+90 542 491 82 39</a></p>
        </div>
        <div className="contact-card">
          <h3>🌐 Sosyal Medya</h3>
          <p>
            <a href="https://www.linkedin.com/in/fatihmuhammetuysal/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{' '}
            <a href="https://github.com/fatihuysalx" target="_blank" rel="noopener noreferrer">GitHub</a> |{' '}
            <a href="https://x.com/ProofMarkChain" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
          </p>
        </div>
      </section>

      <section className="contact-cta" data-aos="fade-up">
        <h2>Neden Bizi Seçmelisiniz?</h2>
        <p>
          ProofMark olarak, ürünlerinizi blockchain teknolojisiyle güvence altına alıyoruz. Sahteciliğe karşı %100 doğrulukla
          çalışan sistemimizle, markanızı ve müşterilerinizi koruyoruz.
        </p>
        <a href="/contact" className="btn">İletişime Geçin</a>
      </section>
    </div>
  );
}

export default Contact;
