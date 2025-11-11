"use client"
import React,{useState} from 'react'
import {ethers} from 'ethers'
import {Button} from '@mui/material';

import {ACCOUNT_2,ACCOUNT_1, CONTRACT_ADDR, ACCOUNT_1_PK} from '../../_const'
import { providerSepoliaSinger, providerSepolia} from '../provider'
import { stakeAbi } from '../../abi'
const ContractTransfer = () => {
  const [status, setStatus] = useState("")
  const getBalance = async ()=>{
    const wallet = new ethers.Wallet(ACCOUNT_1_PK, providerSepolia)
    const contract = new ethers.Contract(CONTRACT_ADDR, stakeAbi, wallet)

    const contract2 = contract.connect(wallet);
    const tx2 = await contract2.transfer(ACCOUNT_2, ethers.parseEther("0.001"))
        console.log(tx2)

// 等待交易上链
    const rec = await tx2.wait();
    setStatus(rec.status === 1?'success':'')
  }
  return (
    <div>
      <Button onClick={getBalance} > transfer 0.001 代币</Button>
      <div>status: {status}</div>
    </div>
  )
}

export default ContractTransfer
