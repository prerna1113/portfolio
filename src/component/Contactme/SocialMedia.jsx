import { Box, Flex, Link } from "@chakra-ui/react";
import { GoMarkGithub } from "react-icons/go";
import { ImLinkedin } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import React from "react";

import { AnimationOnScroll } from "react-animation-on-scroll";

function SocialMedia() {
  const social = [
    {
      url: "https://github.com/prerna1113",
      logo: <GoMarkGithub />,
      id: 1,
      title: "Github",
    },
    {
      url: "https://www.linkedin.com/in/prerna-dubey-276924228/",
      logo: <ImLinkedin />,
      id: 2,
      title: "LinkedIn",
    },
    {
      url: "mailto:prernakumari7427@gmail.com",
      logo: <MdEmail />,
      id: 3,
      title: "Email Me",
    },
    {
      url: "tel:8538962838",
      logo: <BsTelephoneOutboundFill />,
      id: 4,
      title: "8538962838",
    },
  ];
  return (
    <Flex
      gap={{ base: "20px", sm: "30px", lg: "50px", xl: "60px" }}
      width={"100%"}
      justifyContent="center"
    >
      {social.map((el) => (
        <AnimationOnScroll key={el.id} animateIn="animate__bounceIn">
          <Box
            textAlign={"center"}
            alignItems="center"
            justifyContent="center"
            display={"flex"}
            flexDir="column"
          >
            <Link
              target={"_blank"}
              href={el.url}
              textAlign="center"
              alignContent={"center"}
              fontSize="30px"
              color={"grey"}
              _hover={{ color: "black" }}
            >
              {el.logo}
            </Link>
            <Link
              target={"_blank"}
              color={"grey"}
              fontWeight={"500"}
              mt={"10px"}
              _hover={{ textDecoration: "none", color: "black" }}
              display={{ base: "none", sm: "none", lg: "block" }}
              href={el.url}
              fontSize={"20px"}
            >
              {el.title}
            </Link>
          </Box>
        </AnimationOnScroll>
      ))}
    </Flex>
  );
}

export default SocialMedia;