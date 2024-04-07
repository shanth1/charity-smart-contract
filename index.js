const Example = artifacts.require("./Example.sol");

module.exports = async (callback) => {
  try {
    const contract = await Example.deployed();

    const oldState = await contract.getter();
    console.log("Old state:", oldState.toString());

    await contract.setter(1);

    const newState = await contract.getter();
    console.log("New state:", newState.toString());
  } catch (error) {
    console.error(error);
  }
  callback();
};
