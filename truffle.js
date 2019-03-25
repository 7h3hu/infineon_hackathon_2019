const HDWalletProvider = require("truffle-hdwallet-provider-privkey");

module.exports = {
  networks: {
    development: {
      provider: function() {
        const privateKeys = require("./secrets.js").privateKeysPrivateTestnet;
        return new HDWalletProvider(privateKeys, "http://127.0.0.1:7545")
      },
      network_id: "*",
      gas: 5000000,
      gasPrice: 10000000000
    },
    ropsten: {
      provider: function() {
        const privateKeys = require("./secrets.js").privateKeysRopstenTestnet;
        return new HDWalletProvider(privateKeys, "https://ropsten.infura.io/v3/" + infuraApiKey)
      },
      network_id: "3",
      gas: 5000000,
      gasPrice: 50000000000
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
