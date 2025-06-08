const { Keypair } = require("@stellar/stellar-sdk");

const pair = Keypair.random();
console.log("✅ Public Key:", pair.publicKey());
console.log("🔐 Secret Key:", pair.secret());
