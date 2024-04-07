const Donation = artifacts.require("./Donation.sol");

module.exports = function (deployer) {
  const goal = web3.utils.toWei("10", "ether");
  const receiver = "0x94696b68279EEd61cC2982b22035d26B13bcFd86";
  deployer.deploy(Donation, goal, receiver);
};
