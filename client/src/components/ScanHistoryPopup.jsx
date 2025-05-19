import { useEffect, useState } from "react";

export default function ScanHistoryPopup({ qrCode, onClose }) {
  const [scans, setScans] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/scans/${qrCode}`)
      .then((res) => res.json())
      .then((data) => setScans(data.reverse()));
  }, [qrCode]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Scan History</h2>
        <ul className="space-y-2 max-h-64 overflow-y-auto">
          {scans.map((scan, i) => (
            <li key={i} className="border p-2 rounded">
              <div><strong>Stage:</strong> {scan.stage}</div>
              <div><strong>Zaman:</strong> {new Date(scan.timestamp).toLocaleString()}</div>
            </li>
          ))}
        </ul>
        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded" onClick={onClose}>Kapat</button>
      </div>
    </div>
  );
}
