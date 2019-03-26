const ZeroKnowledgeIdentityIssueContract = artifacts.require("ZeroKnowledgeIdentityIssueContract");

module.exports = function(deployer) {
  deployer.deploy(ZeroKnowledgeIdentityIssueContract, "Qme3iSbzinTvFPbKp7Y6rrVtyKto11xzSa3Pi8dfWU9Wnz");
};