import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Flex,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React from "react";
import RightContent from "./RightContent/RightContent";
import Searchinput from "./Searchinput";

const Navbar: React.FC = () => {
  return (
    <Flex bg={"white"} height="44px">
      <Flex align={"center"}>
        TEMP
        {/* <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem>test</MenuItem>
          </MenuList>
        </Menu> */}
      </Flex>
      <Searchinput />
      <RightContent />
    </Flex>
  );
};
export default Navbar;
