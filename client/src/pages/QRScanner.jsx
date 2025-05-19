import React, { useState } from "react";
import ScanHistoryPopup from "../components/ScanHistoryPopup";
import "./QRScanner.css";

function QRScanner() {
  const [result, setResult] = useState(null);
  const [alreadyScanned, setAlreadyScanned] = useState(false);
  const [scanHistory, setScanHistory] = useState([]);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.decodedText) {
        setResult(data.decodedText);
        const historyRes = await fetch(`http://localhost:5000/scans/${data.decodedText}`);
        const scans = await historyRes.json();
        setScanHistory(scans);

        const alreadyConsumer = scans.some((s) => s.stage === "consumer");
        if (alreadyConsumer) {
          setAlreadyScanned(true);
        } else {
          await fetch("http://localhost:5000/scans", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ qrCode: data.decodedText, stage: "consumer" }),
          });
        }
      } else {
        alert("QR kod bulunamadı.");
      }
    } catch (err) {
      alert("Sunucu hatası: " + err.message);
    }
  };

  return (
    <div className="qr-container">
      <section className="qr-hero">
        <h1>QR Kodunu Tara veya Yükle</h1>
        <p>QR görselini yükleyin, içerik otomatik çözümlenecek.</p>
        <input type="file" accept="image/*" onChange={handleImageUpload} className="file-upload" />
      </section>

      {result && !alreadyScanned && (
        <ScanHistoryPopup
          qrCode={result}
          onClose={() => {
            setResult(null);
            setScanHistory([]);
            setAlreadyScanned(false);
          }}
        />
      )}

      {alreadyScanned && (
        <div className="scan-warning">
          Bu QR daha önce doğrulanmış: {" "}
          {new Date(scanHistory.find((s) => s.stage === "consumer").timestamp).toLocaleString()}
        </div>
      )}
    </div>
  );
}

export default QRScanner;
