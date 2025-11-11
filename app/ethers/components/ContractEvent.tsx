"use client"
import React,{useEffect, useState} from 'react'
import {ethers} from 'ethers'
import {Button} from '@mui/material';

import {ACCOUNT_2, CONTRACT_ADDR} from '../../_const'
import { providerSepolia} from '../provider'
import { stakeAbi } from '../../abi'
const ContractEvent = () => {
  const [log, setLog] = useState("")
  const getBalance = async ()=>{
    const contract = new ethers.Contract(CONTRACT_ADDR, stakeAbi, providerSepolia);
    const tx2 = await contract.transfer(ACCOUNT_2, ethers.parseEther("0.001"))
// 等待交易上链
    const rec = await tx2.wait();
    console.log(rec)
  }
  useEffect(()=>{
    const contract = new ethers.Contract(CONTRACT_ADDR, stakeAbi, providerSepolia);
    contract.on("Transfer",  (from, to, value)=>{
    setLog(`${from} -> ${to} ${ethers.formatUnits(ethers.getBigInt(value),6)}`)
  })
  },[])
  return (
    <div>
      <div>log: {log}</div>
    </div>
  )
}

export default ContractEvent
