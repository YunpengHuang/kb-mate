import { Flex } from "@chakra-ui/react";
import React from "react";

type PageContentProps = {
  children: React.ReactNode;
};

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <Flex border={"1px solid green"} justify='center' padding="18px 0px">
      <Flex
        border={"1px solid red"}
        width="95%"
        justify={"center"}
        maxWidth="860px"
      >
        <Flex border={"1px solid orange"}>{children && children[0 as keyof typeof children]}</Flex>
        {/*side icon: refresh (page), keyboard link, 2nd best, 3rd best, 2nd lowest, 3rd lowest, median*/}
        <Flex border={"1px solid blue"}>{children && children[1 as keyof typeof children]}</Flex>
      </Flex>
    </Flex>
  );
};
export default PageContent;
