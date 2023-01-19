import { Divider, Flex } from "@chakra-ui/react";
import React from "react";
import Headroom from "react-headroom";
import Logo from "./Logo";
import Navlinks from "./Navlinks";

function Navbar() {
  return (
    <Headroom>
    <Flex
      width={"100%"}
      p={4}
      paddingX={{base:"10px",sm:"20px",lg:"25px",xl:"30px"}}
      align="center"
      justify={"space-between"}
      bg={"rgba(255,255,255,1)"}
      // boxShadow="rgba(119, 166, 247,0.1) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
    >
      <Logo />
      <Navlinks />
    </Flex>
    <Divider/>
    </Headroom>
  );
}

export default Navbar;