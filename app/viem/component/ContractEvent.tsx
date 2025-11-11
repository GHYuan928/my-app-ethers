"use client"
import React, { useState } from 'react'
import { client} from '../provider'
import {stakeAbi} from '../../abi'
import { CONTRACT_ADDR } from '../../_const'
import Box from '@mui/material/Box';


const ContractEvent = () => {
  const [log, setLog] = useState("");
  client.watchContractEvent({
  address: CONTRACT_ADDR,
  abi:stakeAbi,
  eventName: 'Transfer',
  onLogs: logs => {
    logs.forEach((log: any) => {
      console.log(log)
      setLog (`form:${log.args.from}   to:${log.args.to}  value:${log.args.value}`)
    }  )  
  },
  onError: error => console.error('Event error:', error)
})
  return (
    <Box className={"mt-12"}>
      <div> 监听 ERC-20 合约的 Transfer 事件</div>
      <div>{log}</div>
    </Box>
  )
}

export default ContractEvent
