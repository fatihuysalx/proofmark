import React from "react";
import getProgram from "../utils/getProgram";
import { PublicKey } from "@solana/web3.js";
import { sha256 } from "js-sha256";
import { Buffer } from "buffer";

const AddProductButton = () => {
  const handleAddProduct = async () => {
    try {
      const { program, provider } = await getProgram();

      const productIdentifier = "ProofMark#123456789"; // Ürün kimliği
      const hashBytes = Uint8Array.from(Buffer.from(sha256.digest(productIdentifier)));

      const [productPDA] = PublicKey.findProgramAddressSync(
        [Buffer.from("product"), hashBytes],
        program.programId
      );

      const tx = await program.methods
        .addProduct(Array.from(hashBytes))
        .accounts({
          product: productPDA,
          user: provider.wallet.publicKey,
          systemProgram: PublicKey.default,
        })
        .rpc();

      console.log("✅ Ürün eklendi! Tx:", tx);
      alert("Ürün başarıyla eklendi!");
    } catch (err) {
      console.error("❌ Ürün eklenirken hata:", err);
      alert("Bir hata oluştu.");
    }
  };

  return (
    <button onClick={handleAddProduct} style={{ padding: "10px", margin: "10px", fontSize: "16px" }}>
      📦 Ürün Ekle
    </button>
  );
};

export default AddProductButton;
