import { Box, Button, Divider, Flex, Heading, Img, Link, Text, } from "@chakra-ui/react";
import React from "react";
import Typewriter from 'typewriter-effect';

function About() {
  return (
    <Box  p={5} bg={"transparent"} id="About%20Me">
        
      <Flex
      bg={"transparent"}
        margin={"0 auto"}
        width="80%"
        p={{ base: "10px", sm: "20px", lg: "25px", xl: "30px" }}
        flexDir={{
          base: "column-reverse",
          sm: "column-reverse",
          lg: "row",
          xl: "row",
        }}
        justifyContent={"center"}
        align="center"
      >
        <Box
        bg={"transparent"}
          width={{ base: "100%", sm: "100%", lg: "50%", xl: "50%" }}
          textAlign={{ base: "center", sm: "center", lg: "left", xl: "left" }}
          lineHeight="30px"
        >
          <Link _hover={{textDecoration:"none"}} fontSize={{base:"20px",sm:"25px",lg:"30px",xl:"30px"}} mb="20px" fontWeight="bold">
          

<Typewriter
  options={{
    strings: ['Hi , I am Prerna Kumari'],
    autoStart: true,
    loop: true,
  }}
/>
                
          </Link>
          <Text fontWeight={"500"}>
            I am a Full Stack Web Developer and i have knowledge in HTML, CSS,
            JS, REACT and i make user-friendly websites.
          </Text>
          <Link _hover={{textDecoration:"none"}} href='https://drive.google.com/file/d/16lbyR8t9ueQD_uIJb2bmjCz9PCXoeF7c/view?usp=sharing'>
          <Button mt={"10px"} colorScheme="red">
            Download CV
          </Button>
          </Link>
        </Box>
        <Box width={{ base: "100%", sm: "100%", lg: "50%", xl: "50%" }}>
          <Img
          alt="random image"
            margin={"auto"}
            width={{base:"150px",sm:"180px",lg:"200px",xl:"250px"}}
            height={{base:"150px",sm:"180px",lg:"200px",xl:"250px"}}
            borderRadius={"50%"}
            objectFit="cover"
            src={require("../images/profile.jpeg")}
          ></Img>
        </Box>
      </Flex>
      <Box width={"100%"} p="4" mb={"20px"}><Heading textAlign={"center"}><span className='purpleText'>A</span>BOUT ME</Heading></Box>
      
      <Flex
        flexDir={{ base: "column", sm: "column", lg: "row", xl: "row" }}
        width={{base:"95%",sm:"90%",lg:"80%",xl:"80%"}}
        
        margin={"0 auto"}
        p={4}
        gap="20px"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        borderRadius={"20px"}
      >
        <Box lineHeight={"40px"} bg={"#D3E3FC"} borderRadius="10px" p="4" width={{base:"100%",sm:"100%",lg:"30%",xl:"30%"}} >
          <Text mb={"10px"} fontSize={{base:"15px",sm:"18px",lg:"22px",xl:"22px"}} fontWeight="500">Personal Details</Text>
          <Divider/>
          <Text>
            <b>Email:</b> prernakumari7427@gmail.com
          </Text>
          <Text>
            <b>Language:</b> English
          </Text>
          <Text>
            <b>Nationality:</b> Indian
          </Text>
        </Box>
        <Box width={{base:"100%",sm:"100%",lg:"70%",xl:"70%"}} p="4">
          <Text mb={"10px"} fontSize={{base:"15px",sm:"18px",lg:"22px",xl:"22px"}} fontWeight="500">I am Full Stack Web Developer</Text>
          <Text lineHeight={"35px"}>
            My name is Prerna Kumari, I am from ,madhubani, Bihar.
            Passionate Full Stack Web Developer with skills in the MERN stack, I
            have learned Full Stack Web Development in Masai school. Skilled in
            problem- solving and execution of software tasks from start to
            finish. I look forward to joining a company where I can contribute
            to individual and company growth..
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default About;