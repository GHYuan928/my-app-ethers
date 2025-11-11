import React from 'react'
import { client} from '../provider'
import { formatUnits } from 'viem';
import {ACCOUNT_1} from  '../../_const'
const Balance = async() => {
  const balance = await client.getBalance({address: ACCOUNT_1})
  return (
    <div>
      <div>balance eth: {formatUnits(balance,18)}</div>
    </div>
  )
}

export default Balance
