import { ponder } from "ponder:registry";
import { transaction } from "ponder:schema";

ponder.on("ExampleContract:Transaction", async ({ event, context }) => {
  const { student, amount, to } = event.args;
  console.log(student, amount, to)

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
});