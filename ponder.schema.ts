import { onchainTable } from "ponder";

export const transaction = onchainTable("example", (t) => ({
  id: t.text().primaryKey(),
  sender: t.hex(),
  amount: t.text(),
  to: t.hex(),
  blockNumber: t.bigint(),
  blockTimestamp: t.bigint(),
  transactionHash: t.hex(),
  logIndex: t.text(),
}));


