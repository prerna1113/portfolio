import { Flex, Link,Button,  Menu, MenuButton, MenuList, MenuItem, IconButton, Box } from '@chakra-ui/react'
import {HamburgerIcon} from "@chakra-ui/icons"
import React from 'react'

function Navlinks() {
    const navLinks = [
        {
            path:"/",
            title:"Home"
        },
        {
            path:"/",
            title:"About Me"
        },
        {
            path:"/",
            title:"Skills"
        },
        {
            path:"/",
            title:"Projects"
        },
        {
            path:"/",
            title:"Contact"
        },
        
    ]
  return (<>
  <Flex display={{base:"none",sm:"none",lg:"flex",xl:"flex"}} justify={"space-between"} align="center" flexGrow=".2">
    {
        navLinks.map(link=><Link key={link.title} href={`#${link.title}`} scrollBehavior="smooth"  color={"#77A6F7"} _hover={{color:"red",transform:"scale(1.2)",textDecoration:"none"}} textDecoration="none" fontSize={"18px"} >{link.title}</Link>)
    }
    <Link _hover={{textDecoration:"none"}}
     href='https://drive.google.com/file/d/16lbyR8t9ueQD_uIJb2bmjCz9PCXoeF7c/view?usp=sharing'>
        <Button colorScheme={"red"}>Resume</Button></Link>
    </Flex>
    <Box display={{base:"block",sm:"block",lg:"none",xl:"none"}}>
    <Menu   >
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon= {<HamburgerIcon color={"red"}
    
    
    />}
      
  />
  <MenuList  width={"100vw"}>
    
    {navLinks.map(el=><MenuItem onClick={()=>{
      return window.location.href=`#${el.title}`
    }}  key={el.title}  textAlign="center">{el.title}</MenuItem>)}
  </MenuList>
</Menu>
</Box>
    </>
    
    
  )
}

export default Navlinks