import React from 'react'
import {client} from '../provider'
import {stakeAbi} from '../../abi'
import {ACCOUNT_2, CONTRACT_ADDR} from '../../_const'
import { formatUnits } from 'viem';


const BalanceOf =async () => {
  // 自动推断返回类型为 bigint
const balance = await client.readContract({
  address: CONTRACT_ADDR,
  abi: stakeAbi,
  functionName: 'balanceOf',
  args: [ACCOUNT_2]
})
  return (
    <div>
      balanceOf : {balance?.toString() && formatUnits(balance as bigint ,18)}
    </div>
  )
}

export default BalanceOf
