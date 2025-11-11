import {ethers} from 'ethers'
import { ALCHEMY_MAINNET_URL, ALCHEMY_SEPOLIA_URL, CONTRACT_ADDR} from '../_const'
// 连接以太坊主网

const providerETH = new ethers.JsonRpcProvider(ALCHEMY_MAINNET_URL);
// 连接Sepolia测试网
const providerSepolia = new ethers.JsonRpcProvider(ALCHEMY_SEPOLIA_URL);
const providerSepoliaSinger = new ethers.JsonRpcSigner(providerSepolia, CONTRACT_ADDR)
export {
  providerETH,
  providerSepolia,
  providerSepoliaSinger
}