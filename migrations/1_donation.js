const Donation = artifacts.require("./Donation.sol");

module.exports = async function (deployer) {
  const accounts = await web3.eth.getAccounts();

  const goal = web3.utils.toWei("10", "ether");
  const receiver = accounts[5];
  deployer.deploy(Donation, goal, receiver);
};
