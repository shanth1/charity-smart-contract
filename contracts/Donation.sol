// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Donation {
  uint256 public goal;
  uint256 public totalDonated;
  address payable public receiver;

  event Donate(address indexed donor, uint256 amount, uint256 totalDonated);
  event GoalReached(uint256 totalDonated);

  constructor(uint256 _goal, address payable _receiver) {
    require(_goal > 0, "Goal must be greater than 0");
    goal = _goal;
    receiver = _receiver;
  }

  function donate(bool shouldRefund) external payable {
    require(totalDonated < goal, "Donation goal already reached");
    require(msg.value > 0, "Donation must be greater than 0");

    uint256 amountToDonate = msg.value;
    if (totalDonated + msg.value >= goal) {
      amountToDonate = goal - totalDonated;
      emit GoalReached(goal);
    }

    if (shouldRefund && msg.value > amountToDonate) {
      uint256 refundAmount = msg.value - amountToDonate;
      payable(msg.sender).transfer(refundAmount);
    }

    emit Donate(msg.sender, amountToDonate, totalDonated);
    totalDonated += amountToDonate;

    if (totalDonated >= goal) {
      receiver.transfer(totalDonated);
    }
  }
}
