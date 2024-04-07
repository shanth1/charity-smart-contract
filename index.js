const Example = artifacts.require("./Example.sol");

module.exports = async (callback) => {
  try {
    const contract = await Example.deployed();
    const accounts = await web3.eth.getAccounts();

    await contract.deposit({
      from: accounts[2],
      value: web3.utils.toWei("4", "ether"),
    });

    const balance = await contract.getBalance();
    console.log(
      "Balance of contract:",
      web3.utils.fromWei(balance.toString(), "ether"),
      "ETH",
    );

    // const oldState = await contract.getter();
    // console.log("Old state:", oldState.toString());

    // await contract.setter(1);

    // const newState = await contract.getter();
    // console.log("New state:", newState.toString());
  } catch (error) {
    console.error(error);
  }
  callback();
};
