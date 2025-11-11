"use client"
import React, { useState } from 'react'
import {Box, Button} from '@mui/material';
import {ethers} from 'ethers'
import {ACCOUNT_2, ACCOUNT_1_PK} from '../../_const'
import { providerSepolia} from '../provider'
const Transfer = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const handleTransfer = async ()=>{
    setLoading(true)
    const wallet = new ethers.Wallet(ACCOUNT_1_PK, providerSepolia);
    const tx = {
          to: ACCOUNT_2,
          value: ethers.parseEther("0.001")
      }
    const receipt = await wallet.sendTransaction(tx)
    const rec= await receipt.wait() // 等待链上确认交易
    console.log(receipt) 
    console.log(rec) 
    setStatus(rec!.status === 1?'success':'error')
    setLoading(false)
  }
  return (
    <Box className={"mt-12"}>
      <Button onClick={handleTransfer} loading={loading}> transfer 0.001 ETH</Button>
      <div>{`status: ${status}`}</div>
    </Box>
  )
}

export default Transfer
