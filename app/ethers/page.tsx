import React from 'react'
import Balance from './components/Balance'
import Transfer from './components/Transfer'
import BalanceOf from './components/BalanceOf'
import ContractTransfer from './components/ContractTransfer'
import ContractEvent from './components/ContractEvent'

const Page = () => {
  return (
    <div>
      <Balance />
      <Transfer/>
      <BalanceOf />
      <ContractTransfer/>
      <ContractEvent/>
    </div>
  )
}

export default Page
