import { Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { BsBookmarkHeart, BsGraphUp } from "react-icons/bs";
import { GoKeyboard } from "react-icons/go";
//TODO maybe replace the login and logout with react-icons

const Icons: React.FC = () => {
  return (
    <Flex>
      <Flex
        display={{ base: "none", md: "flex" }}
        align="center"
        borderRight={"1px solid"}
        borderColor="gray.200"
      >
        <Flex
          mr={1.5}
          ml={1.5}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.200" }}
        >
          <Icon as={BsGraphUp} fontSize={19} />
        </Flex>
        <Flex
          mr={1.5}
          ml={1.5}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.200" }}
        >
          <Icon as={BsBookmarkHeart} fontSize={20} />
        </Flex>
      </Flex>
      <>
        <Flex
          mr={1.5}
          ml={1.5}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.200" }}
        >
          <Icon as={GoKeyboard} fontSize={21} />
        </Flex>
      </>
    </Flex>
  );
};
export default Icons;
