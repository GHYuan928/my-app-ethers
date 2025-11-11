"use client"
import {Box, Button} from '@mui/material';
import { parseUnits, parseEther } from 'viem';
import { ACCOUNT_2 } from '../../_const'
import {walletClient,client} from '../provider'
import { useState } from 'react';
const Transfer = () => {
  const [hash , setHash] =useState('')
    const [status, setStatus] =useState('')
    const handleTransfer = async ()=> {
      const hash = await walletClient.sendTransaction({
        to: ACCOUNT_2,
        value: parseEther('0.001')
      })
      setHash(hash)
        // 等待交易确认
      // const transaction = await client.getTransactionReceipt({ 
      //   hash
      // })
      // console.log('transaction',transaction)    
      // setStatus(transaction.status)
    }

  return (
     <Box className={"mt-12"}>
      <div>2、发送 ETH 到另一个地址</div>
      <Button onClick={handleTransfer} > transfer 0.001 ETH</Button>
      <div> transaction hash: {hash} </div>
      <div> transaction receipt status: {status || 'N/A'}</div>
    </Box>
  )
}

export default Transfer
