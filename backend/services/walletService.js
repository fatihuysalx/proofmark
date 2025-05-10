const ProofmarkKey = require("../models/ProofmarkKey");

async function getActiveWallets() {
  return await ProofmarkKey.find({ active: true });
}

async function getActiveWallet() {
  const wallet = await ProofmarkKey.findOne({ active: true });
  if (!wallet) throw new Error("Aktif cüzdan bulunamadı.");
  return wallet.wallet;
}

module.exports = {
  getActiveWallet,
  getActiveWallets,
};
