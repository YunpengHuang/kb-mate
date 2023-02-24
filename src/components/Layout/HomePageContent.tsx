import { Box, Flex } from "@chakra-ui/react";
import React from "react";

type HomePageContentProps = {
  children: React.ReactNode;
};

const HomePageContent: React.FC<HomePageContentProps> = ({ children }) => {
  return (
    <Flex
      // direction={{ base: "column", md: "row" }}
      flexWrap="wrap"
      border={"1px solid red"}
      justify="center"
      padding={"18px 30px"}
      align={"center"}
    >
      {children}
    </Flex>
  );
};
export default HomePageContent;
