const mongoose = require("mongoose");

const proofSchema = new mongoose.Schema({
  qrHash: { type: String, required: true },
  isUsed: { type: Boolean, default: false },
  creator: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  manufacturerSignature: { type: [Number], required: true },
  proofmarkSignature: { type: [Number], required: true },
  currentStage: {
    type: String,
    enum: ["RawMaterial", "InProduction", "FinishedProduct", "InStore"],
    default: "RawMaterial",
  },
  usedAt: { type: Date },
  usedBy: { type: String },
});

module.exports = mongoose.model("Proof", proofSchema);
