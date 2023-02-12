import { authModalState } from "@/src/atoms/authModalAtom";
import { keyboardState } from "@/src/atoms/snippetAtom";
import { auth } from "@/src/firebase/clientApp";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { signOut, User } from "firebase/auth";
import React from "react";
import { BsBookmarkHeart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import {
  MdNoAccounts,
  MdOutlineAccountCircle,
  MdOutlineLogin,
  MdOutlineLogout,
} from "react-icons/md";
import { useResetRecoilState, useSetRecoilState } from "recoil";

type UserMenuProps = {
  user?: User | null;
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const setAuthModalState = useSetRecoilState(authModalState);

  const resetCommunityState = useResetRecoilState(keyboardState);

  const logout = async () => {
    await signOut(auth);
    resetCommunityState();
  };
  return (
    <Menu>
      <MenuButton
        cursor={"pointer"}
        padding="0px 6px"
        borderRadius={4}
        _hover={{ outline: "1px solid", outlineColor: "gray.220" }}
      >
        {user ? (
          <Flex align={"center"}>
            <Flex align={"center"}>
              <>
                <Avatar size={"xs"} src={user.photoURL || ""} />
              </>
              <ChevronDownIcon />
            </Flex>
          </Flex>
        ) : (
          <Icon fontSize={24} color="gray.400" mr={1} as={MdNoAccounts} />
        )}
      </MenuButton>
      <MenuList>
        {user ? (
          <>
            {" "}
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "blue.500", color: "white" }}
            >
              <Flex align={"center"}>
                <Icon fontSize={20} mr={2} as={CgProfile} />
                Profile
              </Flex>
            </MenuItem>
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "blue.500", color: "white" }}
            >
              <Flex align={"center"}>
                <Icon fontSize={20} mr={2} as={BsBookmarkHeart} />
                Watchlist
              </Flex>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "blue.500", color: "white" }}
              onClick={logout}
            >
              <Flex align={"center"}>
                <Icon fontSize={20} mr={2} as={MdOutlineLogout} />
                Logout
              </Flex>
            </MenuItem>
          </>
        ) : (
          <>
            {" "}
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "blue.500", color: "white" }}
              onClick={() => setAuthModalState({ open: true, view: "login" })}
            >
              <Flex align={"center"}>
                <Icon fontSize={20} mr={2} as={MdOutlineLogin} />
                Login
              </Flex>
            </MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
