// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract Example {
  uint8 state = 8;

  function setter(uint8 _state) public {
    state = _state;
  }

  function getter() public view returns (uint8) {
    return state;
  }
}
