import React from "react";
import { Flex, Text  } from "@chakra-ui/react";
import { User } from "firebase/auth";
import { AiOutlineHome } from "react-icons/ai";

type LeftContentProps = {};

const LeftContent: React.FC = () => {
  return (
    <Flex
      justify={"center"}
      align={"center"}
      width={"25%"}
    >
        <Text>Placeholder name</Text>
    </Flex>
  );
};
export default LeftContent;
