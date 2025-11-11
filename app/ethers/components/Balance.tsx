"use client"

import React, { useEffect, useState } from 'react'
import {ethers} from 'ethers'
import {ACCOUNT_1, } from '../../_const'
import {providerETH, providerSepolia} from '../provider'

const Balance = () => {
  const [balance, setBalance] = useState("")
  const [balance20, setBalance20] = useState("")


  async function checkBalances() {
    // 1. 查询vitalik在主网和Sepolia测试网的ETH余额
    console.log("1. 查询vitalik在主网和Sepolia测试网的ETH余额");
    try {
        const balance = await providerETH.getBalance(ACCOUNT_1);

        const balanceSepolia = await providerSepolia.getBalance(ACCOUNT_1);
        // 将余额输出在console（主网）
        console.log(`ETH Balance of vitalik: ${ethers.formatEther(balance)} ETH`);
        setBalance(balance.toString())
        // 输出Sepolia测试网ETH余额
        console.log(`Sepolia ETH Balance of vitalik: ${ethers.formatEther(balanceSepolia)} ETH`);
        setBalance20(ethers.formatEther(balanceSepolia))
    } catch (error) {
        console.error("Error fetching balances:", error);
    }
}
  
useEffect(()=>{
  checkBalances();
},[checkBalances])
  return (
    <div>
      <div>{`ETH Balance of vitalik: ${balance20} ETH`}
</div>

    </div>
  )
}

export default Balance

