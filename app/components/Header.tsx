import React from 'react'
import { Link ,Grid, Box, Divider} from '@mui/material'
const Header = () => {
  return (
    <Box p={2}>
      <Grid container justifyContent="space-between" alignItems="center">
         <Grid >
          ETH Demo
        </Grid>
        <Grid container justifyContent="center" alignItems="center">
          <Link href={"/wagmi"} underline='none' className='mr-4'>Wagmi</Link>
          <Link href={"/ethers"} underline='none' className='mr-4'>ethers</Link>
          <Link href={"/viem"} underline='none' className='mr-4'>viem</Link>
        </Grid>
      </Grid>
      < Divider sx={{ marginTop: 2 }} />
    </Box>
  )
}

export default Header
