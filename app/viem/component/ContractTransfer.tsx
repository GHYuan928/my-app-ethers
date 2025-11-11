"use client"
import React, { useState } from 'react'
import {Box,Button} from '@mui/material';
import {walletClient, client} from '../provider'
import { stakeAbi } from '../../abi'
import { CONTRACT_ADDR,ACCOUNT_2 } from '../../_const';


const ContractTransfer = () => {
  const [hash ,setHash] = useState('')
  const handleTransfer = async ()=> {
    // 写入合约
    const response = await walletClient.writeContract({
      address: CONTRACT_ADDR,
      abi: stakeAbi,
      functionName: 'transfer',
      args: [ACCOUNT_2, BigInt(1 * 10 ** 18)]
    })
    setHash(response)
  }
  return (
    <Box className={"mt-12"}>
      <div>4、实现ERC20的转账功能:</div>
       <Button onClick={handleTransfer}> transfer 1 代币</Button>
      <div>transaction hash: {hash}</div>
      {/* <div>transaction receipt status: {receiptRes.data ? receiptRes.data.status : 'N/A'}</div> */}
    </Box>
  )
}

export default ContractTransfer