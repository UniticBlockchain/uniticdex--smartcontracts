// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity 0.7.6;

interface ISwapCallback {
    function swapCallback(
        int256 amount0Delta,
        int256 amount1Delta,
        bytes calldata data
    ) external;
}