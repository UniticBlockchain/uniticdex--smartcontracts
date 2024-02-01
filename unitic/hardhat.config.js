

require('@nomiclabs/hardhat-ethers');

require('hardhat-contract-sizer');

module.exports.default = {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/467cb109e77349eeb28914213aab1e0a`,
      accounts: ['aae6757d640c565936fef7fb0aa53e9be9e397428406a35ec0008401d7a70c8d']
    },
  },
  solidity: {
    version: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
      metadata: {
        bytecodeHash: 'none',
      },
    },
  },
  contractSizer: {
    alphaSort: false,
    runOnCompile: true,
    disambiguatePaths: false,
  },
};
