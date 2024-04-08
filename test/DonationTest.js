const Donation = artifacts.require("Donation");

contract("Donation", (accounts) => {
  let donation = null;
  const goal = web3.utils.toWei("10", "ether");
  const [donor1, donor2, receiver] = accounts;

  beforeEach(async () => {
    donation = await Donation.new(goal, receiver);
  });

  it("should accept donations", async () => {
    const shouldRefund = false;

    const donation1 = web3.utils.toWei("1", "ether");
    await donation.donate(shouldRefund, { from: donor1, value: donation1 });

    const donation2 = web3.utils.toWei("0.5", "ether");
    await donation.donate(shouldRefund, { from: donor2, value: donation2 });

    const totalDonations = await donation.totalDonated();
    const expectedDonationSum = web3.utils.toWei("1.5", "ether");

    assert.equal(
      totalDonations.toString(),
      expectedDonationSum,
      "Total donations do not match expected sum",
    );
  });
});
