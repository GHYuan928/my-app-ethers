"use client"
import React,{useState} from 'react'
import {ethers} from 'ethers'
import {Button} from '@mui/material';

import {ACCOUNT_1, CONTRACT_ADDR} from '../../_const'
import { providerSepolia} from '../provider'
import { stakeAbi } from '../../abi'
const BalanceOf = () => {
  const [balance, setBalance] = useState("")
  const getBalance = async ()=>{
    const contract = new ethers.Contract(CONTRACT_ADDR, stakeAbi, providerSepolia);
    const balanceWETH = await contract.balanceOf(ACCOUNT_1)
    console.log(`存款前WETH持仓: ${ethers.formatEther(balanceWETH)}\n`)
    setBalance(ethers.formatEther(balanceWETH));
  }
  return (
    <div>
      <Button onClick={getBalance} > get balanceof</Button>
      <div>balance: {balance}</div>
    </div>
  )
}

export default BalanceOf
