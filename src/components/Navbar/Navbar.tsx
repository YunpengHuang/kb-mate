import { auth } from "@/src/firebase/clientApp";
import { Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import RightContent from "./RightContent/RightContent";
import Searchinput from "./Searchinput";
import { AiOutlineHome } from "react-icons/ai";
import LeftContent from "./LeftContent";
//TODO Add onclick on home icon Maybe use hamburger menu instead of home icon (needs a new tsx file)

const Navbar: React.FC = () => {
  const [user] = useAuthState(auth);
  return (
    <Flex
      bg={"white"}
      height={"60px"}
      padding={"6px 12px"}
      justify={{ md: "space-between" }}
    >
      <LeftContent />
      <Searchinput />
      <RightContent user={user} />
    </Flex>
  );
};
export default Navbar;
