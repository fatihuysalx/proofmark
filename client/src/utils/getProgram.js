import { Connection, PublicKey } from "@solana/web3.js";
import { Program, AnchorProvider } from "@coral-xyz/anchor";
import idl from "../idl/supply_chain_solana.json";

const getProvider = () => {
  const connection = new Connection("http://127.0.0.1:8899", "processed");
  const provider = new AnchorProvider(connection, window.solana, {
    preflightCommitment: "processed",
  });
  return provider;
};

const getProgram = () => {
  const provider = getProvider();
  const programID = new PublicKey(idl.metadata.address);
  const program = new Program(idl, programID, provider);
  return { program, provider };
};

export default getProgram;
