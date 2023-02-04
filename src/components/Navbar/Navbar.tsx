import { auth } from "@/src/firebase/clientApp";
import { Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import RightContent from "./RightContent/RightContent";
import Searchinput from "./Searchinput";
import { AiOutlineHome } from "react-icons/ai";
//BUG Dropdown menu getting cutoff

const Navbar: React.FC = () => {
  const [user] = useAuthState(auth);
  return (
    <Flex
      bg={"white"}
      //FIXME temporary solution
      height="400px"
      padding={"6px 12px"}
      justifyContent={{ md: "space-between" }}
    >
      <Flex
        align={"center"}
        width={{ base: "40px", md: "auto" }}
        mr={{ base: 0, md: 2 }}
      >
        <Icon as={AiOutlineHome} />
      </Flex>
      <Searchinput />
      <RightContent user={user} />
    </Flex>
  );
};
export default Navbar;
