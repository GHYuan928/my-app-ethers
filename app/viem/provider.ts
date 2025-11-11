import { createPublicClient, http, createWalletClient } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { sepolia } from 'viem/chains'
import {ALCHEMY_SEPOLIA_URL, ACCOUNT_1_PK} from '../_const'

const account = privateKeyToAccount( `0x${ACCOUNT_1_PK}`)
const walletClient = createWalletClient({
  account,
  chain: sepolia,
  transport: http(ALCHEMY_SEPOLIA_URL)
})
 
 

const client = createPublicClient({
  chain: sepolia,
  transport: http(ALCHEMY_SEPOLIA_URL)
})
export {
  client,
  walletClient
}