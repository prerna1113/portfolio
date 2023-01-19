import {
    Badge,
    Box,
    Flex,
    IconButton,
    Img,
    Link,
    Text,
    Wrap,
  } from "@chakra-ui/react";
  import React from "react";
  import { GoMarkGithub } from "react-icons/go";
  import { CgMediaLive } from "react-icons/cg";
  import { AnimationOnScroll } from "react-animation-on-scroll";
  
  function ProjectCard({ data }) {
    return (
      <Flex
        mb={"50px"}
        gap={"20px"}
        _even={{
          flexDir: {
            base: "column",
            sm: "column",
            lg: "row-reverse",
            xl: "row-reverse",
          },
        }}
        flexDir={{ base: "column", sm: "column", lg: "row", xl: "row" }}
      >
        <AnimationOnScroll animateIn="animate__backInDown">
          <Box
            borderRadius="10px"
            p={3}
            border={"3px solid #77A6F7"}
            bg="#77A6F7"
          >
            <Box>
              <Img
                alt="random image5"
                border={"2px solid black"}
                borderRadius="10px"
                width={"100%"}
                src={data.img1}
              ></Img>
            </Box>
            <Wrap mt={"10px"} width={"100%"} justify="center">
              <Img
                alt="random image4"
                borderRadius="10px"
                border={"2px solid #D3E3FC"}
                width={"120px"}
                src={data.img2}
              ></Img>
              <Img
                alt="random image3"
                borderRadius="10px"
                border={"2px solid #D3E3FC"}
                width={"120px"}
                src={data.img3}
              ></Img>
              <Img
                alt="random image2"
                borderRadius="10px"
                border={"2px solid #D3E3FC"}
                width={"120px"}
                src={data.img4}
              ></Img>
            </Wrap>
          </Box>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__zoomIn">
          <Box>
            <Text
              mb={"20px"}
              color={"#9AA4EC"}
              fontWeight="600"
              fontSize={{ base: "18px", sm: "20px", lg: "30px" }}
            >
              {data.title}
            </Text>
            <Text mb={"20px"}>{data.description}</Text>
            <Box mb={"20px"}>
              {data.techStacks.map((el) => (
                <Badge
                  key={el}
                  p={1}
                  borderRadius="10px"
                  colorScheme={"orange"}
                  mr={"20px"}
                >
                  {el}
                </Badge>
              ))}
            </Box>
            <Flex gap={"20px"}>
              <Link href={data.github} isExternal>
                <IconButton colorScheme={"red"} icon={<GoMarkGithub />} />{" "}
              </Link>
              <Link href={data.live} isExternal>
                <IconButton
                  colorScheme={"red"}
                  icon={<CgMediaLive />}
                ></IconButton>{" "}
              </Link>
            </Flex>
          </Box>
        </AnimationOnScroll>
      </Flex>
    );
  }
  
  export default ProjectCard;