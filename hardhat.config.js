require('@nomicfoundation/hardhat-toolbox');
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "polygon",
  networks: {
    hardhat: {
    },
    polygon: {
      url:process.env.PUBLIC_RPC_URL ,
      accounts: [ process.env.PRIVATE_KEY]
    }
  },
  paths: {
    artifacts: "./app/src/artifacts",
    // sources: "./contracts"
  }
 
};
