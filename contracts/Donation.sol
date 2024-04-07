// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract Donation {
	uint public goal;
	bool public goalAchieved;

	uint public totalDonated;
	address payable public receiver;

	constructor(uint _goal, address _receiver) {
		require(_goal > 0, "Goal must be greater than 0");
    goal = _goal;
    fund = _fund;
    totalDonated = 0;
    goalReached = false;
	}
}
