import React from 'react'
import logoTitle from '../../Assets/image/title.png'
import { Box } from "@mui/material";

function Home() {
  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh" // Adjust the height as per your requirement
  ><img src={logoTitle} alt={"logo-title"} /></Box>
  )
}

export default Home