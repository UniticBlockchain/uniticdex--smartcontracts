
const { ethers } = require("hardhat");


async function main() {
  const WETH = "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889";
  const Factory = await ethers.getContractFactory("Factory");
  console.log("Deploying Factory...");
  const factory = await Factory.deploy();
  await factory.deployed();
  console.log("Factory deployed to:", factory.address);

  const Token = await ethers.getContractFactory("MERC20");
  console.log("Deploying Token...");
  let token0 = await Token.deploy("T0", "T0");
  await token0.deployed();
  console.log("Token0 deployed to:", token0.address);

  let token1 = await Token.deploy("T1", "T1");
  await token1.deployed();
  console.log("Token1 deployed to:", token1.address);

  const NonFungiblePositionManager = await ethers.getContractFactory("NonfungiblePositionManager");
  console.log("Deploying NonFungiblePositionManager...");
  const nonFungiblePositionManager = await NonFungiblePositionManager.deploy(factory.address, WETH, ethers.constants.AddressZero);
  await nonFungiblePositionManager.deployed();
  console.log("NonFungiblePositionManager deployed to:", nonFungiblePositionManager.address);

  const SwapRouter = await ethers.getContractFactory("SwapRouter");
  console.log("Deploying SwapRouter...");
  const swapRouter = await SwapRouter.deploy(factory.address, WETH);
  await swapRouter.deployed();
  console.log("SwapRouter deployed to:", swapRouter.address);

  let tx = await factory.createPool(token0.address, token1.address, 3000);
  await tx.wait();
  console.log("Pool created: ", tx.hash);
}

main()

.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});



