const Donation = artifacts.require("./Donation.sol");

const drawDivider = () => {
  console.log("-----------------------");
};

const donate = async (donation, donorAccountId, shouldRefund, rawAmount) => {
  const accounts = await web3.eth.getAccounts();

  const donateAmount = web3.utils.toWei(rawAmount, "ether");
  const donor = accounts[donorAccountId];

  await donation.donate(shouldRefund, {
    from: donor,
    value: donateAmount,
  });
  console.log("Transaction successful!");
};

const logStatus = async (donation) => {
  const isGoalReached = await donation.isGoalReached();
  console.log("[IS GOAL REACHED]", isGoalReached.toString());

  const totalDonated = await donation.totalDonated();
  console.log(
    "[TOTAL DONATED]",
    web3.utils.fromWei(totalDonated.toString(), "ether"),
    "ETH",
  );
};

module.exports = async function (callback) {
  try {
    const donation = await Donation.deployed();

    await logStatus(donation);
    drawDivider();
    await donate(donation, 0, false, "5");
    await logStatus(donation);
    drawDivider();
    await donate(donation, 0, false, "12");
    await logStatus(donation);
    drawDivider();

    console.log("Done!");
  } catch (error) {
    console.log("Error:", error);
  }

  callback();
};
