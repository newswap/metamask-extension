const defaultNetworksData = [
  // {
  //   labelKey: 'mainnet',
  //   iconColor: '#29B6AF',
  //   providerType: 'mainnet',
  //   rpcUrl: 'https://api.infura.io/v1/jsonrpc/mainnet',
  //   chainId: '1',
  //   ticker: 'ETH',
  //   blockExplorerUrl: 'https://etherscan.io',
  // },
  {
    labelKey: 'NewChainTestNet',
    label: 'NewChainTestNet',
    iconColor: '#F6C343',
    providerType: 'rpc',
    rpcUrl: 'https://rpc6.newchain.cloud.diynova.com',
    chainId: '1007',
    ticker: 'NEW',
    blockExplorerUrl: 'https://explorer.testnet.newtonproject.org',
  },
  {
    labelKey: 'NewChainMainNet',
    label: 'NewChainMainNet',
    iconColor: '#29B6AF',
    providerType: 'rpc',
    rpcUrl: 'https://cn.rpc.mainnet.diynova.com',
    chainId: '1012',
    ticker: 'NEW',
    blockExplorerUrl: 'https://explorer.newtonproject.org',
  },
]

export {
  defaultNetworksData,
}
