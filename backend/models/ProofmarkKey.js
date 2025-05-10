const mongoose = require("mongoose");

const proofmarkKeySchema = new mongoose.Schema({
  wallet: { type: String, required: true },
  label: { type: String },
  active: { type: Boolean, default: true },
});

module.exports = mongoose.model("ProofmarkKey", proofmarkKeySchema);
