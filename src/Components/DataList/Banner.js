import React from 'react'
import { Box } from "@mui/material";

function Banner({banner}) {
  return (
    <Box width="100%">
      <img src={banner} alt="banner" style={{ width: '100%' }} />
    </Box>
  )
}

export default Banner