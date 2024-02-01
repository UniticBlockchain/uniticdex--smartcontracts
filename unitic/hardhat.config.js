/** @type import('hardhat/config').HardhatUserConfig */
require("hardhat-contract-sizer")
module.exports = {
  solidity: "0.7.6",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    }
  },
  
  contractSizer: {
    alphaSort: false,
    runOnCompile: true,
    disambiguatePaths: false,
  },
};
