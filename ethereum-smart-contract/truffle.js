const HDWalletProvider = require("truffle-hdwallet-provider-privkey");

module.exports = {
  networks: {
    development: {
      provider: function() {
        const privateKeys = ["273523be9cb38e667fd9243caa7d52a8e0f2ebf98882a9c8a1992aa51775e652"];
        return new HDWalletProvider(privateKeys, "http://127.0.0.1:7545")
      },
      network_id: "*",
      gas: 5000000,
      gasPrice: 10000000000
    }
  },
  compilers: {
    solc: {
      version: "0.4.24",  
      settings: {
        optimizer: {
          enabled: false,
          runs: 200    
        }
      }
    }
  }
};