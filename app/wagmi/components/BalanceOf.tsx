import React from 'react'
import {Box, Button} from '@mui/material';

import { useAccount , useReadContract} from 'wagmi'
import { stakeAbi } from '../../abi'
import { CONTRACT_ADDR,ACCOUNT_1 } from '../../_const';
import { formatUnits } from 'viem';


const BalanceOf = () => {
    const account = useAccount();

  const readResult = useReadContract({
    abi: stakeAbi,
    address: CONTRACT_ADDR,
    functionName: 'balanceOf',
    args: [ACCOUNT_1 || ''],
    query: {enabled: !!account?.address},
  })
  return (
    <Box className={"mt-12"}>
      <div>3、ERC-20 合约的 balanceOf 方法:</div>
      <div>Read Contract Balance: {readResult.data?.toString()}</div>
      <div>formatUnits: {readResult.data ? formatUnits(BigInt(readResult.data?.toString()), 18) : '0'} </div>
    </Box>
  )
}

export default BalanceOf
