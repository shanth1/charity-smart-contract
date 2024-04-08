// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract Donation {
	uint public goal;
	bool public goalAchieved;

	uint public totalDonated;
	address payable public receiver;

	event Donate(address donor, uint amount, uint totalDonated);
  event GoalReached(uint totalDonated);

	constructor(uint _goal, address payable _receiver) {
		require(_goal > 0, "Goal must be greater than 0");
    goal = _goal;
    receiver = _receiver;
    totalDonated = 0;
    goalAchieved = false;
	}

	function donate(bool shouldRefund) external payable {
		require(!goalAchieved, "Donation goal already reached");
		require(msg.value > 0, "Donation must be greater than 0");

		uint amountToDonate = msg.value;
		if(totalDonated + msg.value > goal) {
			amountToDonate = goal - totalDonated;
			goalAchieved = true;
			emit GoalReached(totalDonated + amountToDonate);
		}

		if(shouldRefund) {
			 payable(msg.sender).transfer(msg.value - amountToDonate);
		}

		totalDonated += amountToDonate;
    emit Donate(msg.sender, amountToDonate, totalDonated);

    if(goalAchieved) {
      receiver.transfer(totalDonated);
    }
	}

	function isGoalReached() public view returns (bool) {
 		return goalAchieved;
  }

  function getTotalDonated() public view returns (uint) {
  	return totalDonated;
  }
}
