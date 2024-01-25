// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.19;

import './Pool.sol';

contract PoolDeployer {

    function deploy(
        address factory,
        address token0,
        address token1,
        uint24 fee,
        int24 tickSpacing
    ) internal returns (address pool) {
        pool = address(new Pool{salt: keccak256(abi.encode(token0, token1, fee))}(factory, token0, token1, fee, tickSpacing));
    }
}