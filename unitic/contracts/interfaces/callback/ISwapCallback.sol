// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity 0.8.19;

interface ISwapCallback {
    function swapCallback(
        int256 amount0Delta,
        int256 amount1Delta,
        bytes calldata data
    ) external;
}