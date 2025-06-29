import { ponder } from "ponder:registry";
import { transaction } from "ponder:schema";

ponder.on("ExampleContract:Transaction", async ({ event, context }: any) => {
  const { student, amount, to } = event.args;

  await context.db
  .insert(transaction)
  .values({
    id: event.log.logIndex.toString(), // unique id
    sender: student,
    to,
    amount: amount.toString(), // store BigInt as string
    blockNumber: event.block.number,
    blockTimestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
    logIndex: event.log.logIndex.toString(),
  });

  // 2. Mulai listen event dari kontrak brand ini
  context.network.watchContractEvent({
    abi: "BrandABI",
    address: "brandAddress",
    eventName: "NFTMinted", // atau "*" untuk semua event
  });

  console.log(`✅ Mulai listen NFT dari brand ${"brandAddress"}`);
});