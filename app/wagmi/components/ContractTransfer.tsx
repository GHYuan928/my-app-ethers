import React from 'react'
import {Box,Button} from '@mui/material';
import { useWriteContract, useWaitForTransactionReceipt} from 'wagmi'
import { stakeAbi } from '../../abi'
import { CONTRACT_ADDR,ACCOUNT_2 } from '../../_const';
import { formatUnits } from 'viem';


const ContractTransfer = () => {
  const { writeContractAsync , status, data: transferData} = useWriteContract()
  const receiptRes = useWaitForTransactionReceipt({
    hash: transferData,
  })
  const handleTransfer = async ()=> {
    const hash = await writeContractAsync({
      abi: stakeAbi,
      address: CONTRACT_ADDR,
      functionName: 'transfer',
      args: [ACCOUNT_2, BigInt(1 * 10 ** 18)],
    })
    console.log("hash",hash);
  }
  return (
    <Box className={"mt-12"}>
      <div>4、实现ERC20的转账功能:</div>
       <Button onClick={handleTransfer} loading={status === "pending"}> transfer 1 代币</Button>
      <div>transaction hash: {transferData}</div>
      <div>transaction receipt status: {receiptRes.data ? receiptRes.data.status : 'N/A'}</div>
    </Box>
  )
}

export default ContractTransfer