import { createConfig } from "ponder";

import { ExampleContractAbi } from "./abis/ExampleContractAbi";

export default createConfig({
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
      address: "0xfcb5b4b87E3c7716a136b290465A18e93a06fDBa",
      startBlock: 22277552,
      // endBlock: 22278552,
    },
  },
});
