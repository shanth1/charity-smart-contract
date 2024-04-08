const Donation = artifacts.require("./Donation.sol");

module.exports = function (deployer) {
  const goal = web3.utils.toWei("10", "ether");
  const receiver = "0x966B6E56382DD425aA7A2530fe0Fafd8ae1679A5";
  deployer.deploy(Donation, goal, receiver);
};
