const ZeroKnowledgeIdentityIssueContract = artifacts.require("ZeroKnowledgeIdentityIssueContract");

module.exports = function(deployer) {
  deployer.deploy(ZeroKnowledgeIdentityIssueContract);
};