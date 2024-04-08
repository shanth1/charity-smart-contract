const Donation = artifacts.require("./Donation.sol");

module.exports = async function (callback) {
  try {
    const donation = await Donation.deployed();
    const accounts = await web3.eth.getAccounts();

    const isGoalReached = await donation.isGoalReached();
    console.log("[IS GOAL REACHED]", isGoalReached.toString());

    const totalDonated = await donation.getTotalDonated();
    console.log("[TOTAL DONATED]", totalDonated.toString());

    const donateAmount = web3.utils.toWei("10", "ether");
    const shouldRefund = true;
    const donor = accounts[0];

    // Вызываем функцию donate контракта Donation
    let result = await donation.donate(shouldRefund, {
      from: donor,
      value: donateAmount,
    });

    console.log("Transaction successful!", result.receipt);
  } catch (error) {
    console.log("Error:", error);
  }

  callback();
};
