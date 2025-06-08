const anchor = require("@project-serum/anchor");
const { Connection, clusterApiUrl, PublicKey, SystemProgram, Keypair } = require("@solana/web3.js");
const idl = require("../../anchor-backend/target/idl/proofmark.json");
const walletKeypair = require("../../anchor-backend/target/deploy/anchor_backend-keypair.json");

const keypair = Keypair.fromSecretKey(Uint8Array.from(walletKeypair));
const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
const wallet = new anchor.Wallet(keypair);
const provider = new anchor.AnchorProvider(connection, wallet, { commitment: "confirmed" });
const programId = new PublicKey(idl.address);
const program = new anchor.Program(idl, programId, provider);

async function initializeProofOnChain(qrHash) {
  const [proofPDA] = PublicKey.findProgramAddressSync(
    [Buffer.from("proof"), Buffer.from(qrHash)],
    program.programId
  );

  try {
    const tx = await program.methods
      .initializeProof(qrHash, new Array(64).fill(0), new Array(64).fill(0))
      .accounts({
        proof: proofPDA,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    console.log("✅ Zincir üstü kayıt başarılı. Tx:", tx);
    return tx;
  } catch (err) {
    console.error("❌ Zincir üstü kayıt hatası:", err);
    throw err;
  }
}

module.exports = {
  initializeProofOnChain,
};
