import React from 'react'
import {useAccount,useBalance} from 'wagmi'
import {ACCOUNT_1} from '../../_const'
import Box from '@mui/material/Box';

const Balance = () => {
  const account= useAccount();
  const {data: balance} = useBalance({
    address: ACCOUNT_1,
  })
  // const { data: erc20 } = useBalance({
  //   address: account.address,
  //   token: "0x53dcd07b90b6326dc0eaae84963b3100b0fe7963"
  // }); 
  return (
     <Box className={"mt-12"}>
      <div>1、使用交互库连接sepolia测试网，查询一个你的地址的余额:</div>
      {account.isConnected ? (
        <>
          <div>Address: {account.address}</div>
          <div>Balance: {balance?.formatted}  {balance?.symbol}</div>
          {/* <div>ERC20 Balance: {erc20?.formatted}  {erc20?.symbol}</div> */}
        </>
      ) : (
        <div>Please connect your wallet</div>
      )}
    </Box>
  )
}

export default Balance
