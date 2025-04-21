import React from "react";
import "./QRScanner.css";
import { Typography } from "@mui/material";

const QRScanner = () => {
  return (
    <div className="qr-page">
      <Typography variant="h5" component="h2" className="qr-title">
        📷 QR Kodunuzu Tarayın
      </Typography>

      <div className="qr-frame">
        <div className="qr-box">
          <div className="qr-laser"></div>
        </div>
      </div>

      <Typography variant="body2" className="qr-instruction">
        Kamerayı QR kodun üzerine getirin. Ürün bilgileri otomatik olarak yüklenecektir.
      </Typography>
    </div>
  );
};

export default QRScanner;
