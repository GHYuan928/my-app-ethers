import React from 'react'
import Balance from './component/Balance'
import Transfer from './component/Transfer'
import BalanceOf from './component/BalanceOf'
import ContractTransfer from './component/ContractTransfer'
import ContractEvent from './component/ContractEvent'

const Page = () => {
  return (
    <div>
      <Balance />
      <Transfer />
      <BalanceOf />
      <ContractTransfer/>
      <ContractEvent />
    </div>
  )
}

export default Page
