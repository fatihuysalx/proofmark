const mongoose = require("mongoose");
const ProofmarkKey = require("./models/ProofmarkKey");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/proofmark");

  const newKey = new ProofmarkKey({
    wallet: "546e1Tz744uDM3TbitzsE7JwbiqCq9yeErmsHi7AvgUC",
    label: "Ana ProofMark cüzdanı",
    active: true,
  });

  await newKey.save();
  console.log("Yeni cüzdan eklendi:", newKey);

  await mongoose.disconnect();
}

main().catch(console.error);
