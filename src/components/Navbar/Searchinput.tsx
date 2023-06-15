/* eslint-disable react/no-children-prop */
import { PhoneIcon, Search2Icon, SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { User } from "firebase/auth";
import React from "react";

/* type SearchinputProps = {
  user?: User | null;
}; */

const Searchinput: React.FC = () => {
  return (
    <Flex flexGrow={1} align="center" maxWidth={"600px"}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.300" mb={"1px"} />}
        />
        <Input
          placeholder="Search Keyboard"
          fontSize={"10pt"}
          _placeholder={{ color: "gray.500" }}
          _hover={{
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          _focus={{
            outline: "none",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          height="34px"
          bg={"gray.50"}
        />
      </InputGroup>
    </Flex>
  );
};
export default Searchinput;
