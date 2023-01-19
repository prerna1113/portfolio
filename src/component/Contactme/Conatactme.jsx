import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import FormData from './FormData'
import SocialMedia from './SocialMedia'

function Contactme() {
  return (
    <Box id='Contact' scrollBehavior={"smooth"} width={"100%"}>
        <Heading mb={"50px"} textAlign={"center"}><span className='purpleText'>C</span>ONTACT ME </Heading>
        <SocialMedia/>
        <FormData/>
    </Box>
  )
}

export default Contactme