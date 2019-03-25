const Contract = artifacts.require("ZeroKnowledgeIdentityIssueContract");

const wallet = "0x9c8f0BeBb7AD84CE013D57D233458987a578Dd2e";

contract('ZeroKnowledgeIdentityIssueContract', async (accounts) => {
  it("should issue an identity token", async () => {
    const contract = await Contract.deployed();
    await contract.issueIdentityToken("0x9c8f0BeBb7AD84CE013D57D233458987a578Dd2e", "QmPnaimTGPYUpJdKmH5Z1JhpFXk5FsAdrZsmj32dMUZRYC", { from: wallet });
    const balanceOf = await contract.balanceOf("0x9c8f0BeBb7AD84CE013D57D233458987a578Dd2e", { from: wallet });
    assert(balanceOf == 1);
  })
})