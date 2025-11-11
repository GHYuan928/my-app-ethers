import React, { useState } from 'react'
import { useWatchContractEvent } from 'wagmi'
import {stakeAbi} from '../../abi'
import { CONTRACT_ADDR } from '../../_const'
import Box from '@mui/material/Box';


const ContractEvent = () => {
  const [log, setLog] = useState("");
  useWatchContractEvent({
    address: CONTRACT_ADDR,
    abi: stakeAbi,
    eventName: 'Transfer',
    onLogs(logs) {
      console.log('New logs!', logs)
      setLog(logs.join(';'))
    },
  })
  return (
    <Box className={"mt-12"}>
      <div> 监听 ERC-20 合约的 Transfer 事件</div>
      <div>{log}</div>
    </Box>
  )
}

export default ContractEvent
