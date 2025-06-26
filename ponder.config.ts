import { createConfig } from "ponder";

import { ExampleContractAbi } from "./abis/ExampleContractAbi";

export default createConfig({
  database: { 
    kind: "postgres", 
    connectionString: process.env.DATABASE_URL, 
  }, 
  chains: {
    monadTestnet: {
      id: 10143,
      rpc: "https://testnet-rpc.monad.xyz/",
    },
  },
  contracts: {
    ExampleContract: {
      chain: "monadTestnet",
      abi: ExampleContractAbi,
      // address: process.env.CONTRACT_ADDRESS || "0xfcb5b4b87E3c7716a136b290465A18e93a06fDBa",
      address:  "0x8ceEde932dB45E8cb6389D2ffa7b09385f3386dB",
      startBlock: 22277552,
      endBlock: 22278552,
    },
  },
});
