// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract Example {
  uint256 state;

  function setter(uint256 _state) public {
    state = _state;
  }

  function getter() public view returns (uint256) {
    return state;
  }
}
