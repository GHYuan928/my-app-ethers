"use client"
import React from 'react'
import Box from '@mui/material/Box';
import { useAccount } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Balance from './components/Balance';
import Transfer from './components/Transfer';
import ContractEvent from './components/ContractEvent'
import BalanceOf from './components/BalanceOf';
import ContractTransfer from './components/ContractTransfer';

const Page = () => {
  const account = useAccount();
  console.log('--account',account)
  return (
    <Box p={2}>
      <ConnectButton showBalance={true} />
      <Balance />
      <Transfer/>
      <BalanceOf />
      <ContractTransfer />
      <ContractEvent />
    </Box>
  )
}

export default Page
