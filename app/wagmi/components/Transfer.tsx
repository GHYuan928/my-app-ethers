import {Box, Button} from '@mui/material';
import { useWaitForTransactionReceipt, useSendTransaction } from 'wagmi'
import { parseUnits } from 'viem';
import { ACCOUNT_2 } from '../../_const'
const Transfer = () => {
    const {sendTransaction, data : hash, status:stStatus} = useSendTransaction();
    const {status, data: txData} =  useWaitForTransactionReceipt({
      hash: hash,
    })
    const handleTransfer = async ()=> {
      sendTransaction({
        to: ACCOUNT_2,
        value: parseUnits('0.001', 18),
      })
    }
  console.log('--1',stStatus);
  console.log('--2',status);

  return (
     <Box className={"mt-12"}>
      <div>2、发送 ETH 到另一个地址</div>
      <Button onClick={handleTransfer} > transfer 0.001 ETH</Button>
      <div> transaction hash: {hash} {stStatus}</div>
      <div> transaction receipt status: {txData ? txData.status : 'N/A'}</div>
    </Box>
  )
}

export default Transfer
