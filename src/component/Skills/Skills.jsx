import {  Img, Text, VStack, Wrap } from "@chakra-ui/react";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Skills() {
  const skillList = [
    {
      title: "HTML",
      logo: "https://mohitkss.github.io/static/media/html5.4e6edfe05f07c383e94f.png",
    },
    {
      title: "CSS",
      logo: "https://mohitkss.github.io/static/media/css3.845e8eb63836bef093cf.png",
    },
    {
      title: "Javascript",
      logo: "https://mohitkss.github.io/static/media/js.3dfb665e058d08c99f28.png",
    },
    {
      title: "NodeJS",
      logo: "https://mohitkss.github.io/static/media/nodejs.b508473ad71a31ce2fae.png",
    },
    {
      title: "ReactJS",
      logo: "https://mohitkss.github.io/static/media/react.22d1f2096ed82cab7a8a.png",
    },
    {
      title: "Redux",
      logo: "https://mohitkss.github.io/static/media/redux.7fec6369cecd1cbd44d6.png",
    },
    {
      title: "MongoDB",
      logo: "https://mohitkss.github.io/static/media/mongodb.4f7af09e6354d51beec8.png",
    },
    {
      title: "ChakraUI",
      logo: "https://avatars.githubusercontent.com/u/54212428?s=280&v=4",
    },
    {
      title: "Git",
      logo: "https://mohitkss.github.io/static/media/git.b1472a80b81e487179cf.png",
    },
    {
      title: "Github",
      logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    },
    
    {
      title: "ExpressJS",
      logo: "https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png",
    },
  ];
  return (
    <Wrap
      width={{ base: "95%", sm: "90%", lg: "90%", xl: "90%" }}
      margin="0 auto"
      mt={"60px"}
      paddingY="20px"
      spacing={{ base: "20px", sm: "30px", lg: "40px", xl: "40px" }}
      justify="center"
    >
      {skillList.map((skill) => (
        <AnimationOnScroll key={skill.title} animateIn="animate__fadeIn" duration={2} >
        <VStack _hover={{transform:{base:"none",sm:"none",lg:"scale(1.2)",xl:"scale(1.2)"}}} justifyContent={"space-between"} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" p="3" borderRadius={"10px"} w={{base:"100px",sm:"110px",lg:"120px",xl:"120px"}}>
          <Img  alt="random image7" src={skill.logo}></Img>
          <Text  textAlign={"center"}>{skill.title}</Text>
        </VStack>
        </AnimationOnScroll>
      ))}
    </Wrap>
    
  );
}

export default Skills;