export const networks: Record<
  string,
  {
    name: string;
    icon: string;
    rpcUrl: string;
    chainId: string;
    currency: { name: string; symbol: string; decimals: number };
  }
> = {
  "0x61": {
    name: "BSC Testnet",
    icon: "https://cryptologos.cc/logos/bnb-bnb-logo.svg",
    rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    chainId: "0x61", // 97 in decimal
    currency: { name: "Binance Coin", symbol: "BNB", decimals: 18 },
  },
  "0x64": {
    name: "Gnosis Testnet",
    icon: "https://cryptologos.cc/logos/gnosis-gno-gno-logo.svg",
    rpcUrl: "https://rpc.chiadochain.net",
    chainId: "0x64", // 100 in decimal
    currency: { name: "xDAI", symbol: "xDAI", decimals: 18 },
  },
};
