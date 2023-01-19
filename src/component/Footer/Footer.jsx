import { Box, Divider, Text } from '@chakra-ui/react'
import React from 'react'

function Footer() {
  return (
    <Box mb={"20px"} textAlign={"center"} width="fit-content" margin={"0 auto"}>
      <Divider mb={"20px"}></Divider>
        <Text fontWeight={"500"} fontSize="25px" color={"red.300"}>Prerna Kumari · Developer</Text>
        <Text mb={"20px"} fontWeight={"300"} >© 2022 Prerna Kumari . All rights reserved. </Text>
        
    </Box>
  )
}

export default Footer

