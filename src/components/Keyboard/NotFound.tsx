import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import Link from "next/link";

const keyboardNotFound: React.FC = () => {
  return (
    <Flex
      direction={"column"}
      justifyContent="center"
      alignItems={"center"}
      minHeight="60vh"
    >
      Keyboard does not exist
      <Link href="/">
        <Button mt={4}>Go Home</Button>
      </Link>
    </Flex>
  );
};

export default keyboardNotFound;
