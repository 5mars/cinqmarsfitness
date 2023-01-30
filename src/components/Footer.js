import React from 'react'
import { Box, Stack, Typography } from '@mui/system'

import Logo from "../assets/images/Logo-1.png"
import newLogoCol from "../assets/images/newLogoCol.png"

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#1B1A23">
      <Stack gap="40px" alignItems="center" p="24px 40px">
        <img src={newLogoCol} alt="logo" width="200px" height="50px" />
      </Stack>
    </Box>
  )
}

export default Footer