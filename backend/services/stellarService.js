require("dotenv").config();
const { Server, Keypair, TransactionBuilder, Networks, Operation } = require("stellar-sdk");

const server = new Server("https://horizon-testnet.stellar.org");
const STELLAR_SECRET = process.env.STELLAR_SECRET;

async function writeToStellar(qrHash) {
  const source = Keypair.fromSecret(STELLAR_SECRET);
  const account = await server.loadAccount(source.publicKey());
  const fee = await server.fetchBaseFee();

  const tx = new TransactionBuilder(account, {
    fee,
    networkPassphrase: Networks.TESTNET,
  })
    .addOperation(
      Operation.manageData({
        name: `proofmark_${Date.now()}`,
        value: qrHash,
      })
    )
    .setTimeout(30)
    .build();

  tx.sign(source);
  const result = await server.submitTransaction(tx);
  return result.hash;
}

module.exports = { writeToStellar };
