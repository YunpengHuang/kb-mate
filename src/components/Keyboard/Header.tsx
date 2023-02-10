import { Keyboard } from "@/src/atoms/keyboardatom";
import { Box, Button, Flex, Icon, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { VscInfo } from "react-icons/vsc";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import useKeyboardData from "@/src/hooks/useKeyboardData";

type HeaderProps = {
  keyboardData: Keyboard;
};

//TODO Make this layout prettier
const Header: React.FC<HeaderProps> = ({ keyboardData }) => {
  const { keyboardStateValue, onHeartOrUnheartKeyboard } = useKeyboardData();

  const hearted = !!keyboardStateValue.KbSnippets.find(
    (item) => item.KeyboardId === keyboardData.id
  );
  return (
    <Flex justify="center" width="100%" bg="blue.400" flexGrow={1}>
      <Flex width={"90%"} maxWidth="860px" border={"1px solid red"}>
        <Flex direction={"column"} padding="10px 0px">
          <Text fontWeight={500} fontSize={"40px"} color="white">
            {keyboardData.id}
          </Text>
          <Flex direction={"row"} padding="15px 0px">
            <Flex mr={16}>
              <Text fontSize={"19px"}>Latest Price</Text>
              <Tooltip shouldWrapChildren label="test" placement="top-end">
                <Icon as={VscInfo} />
              </Tooltip>
            </Flex>
            <Flex mr={16}>
              <Text fontSize={"19px"}>Trades</Text>
              <Tooltip shouldWrapChildren label="test" placement="top-end">
                <Icon as={VscInfo} />
              </Tooltip>
            </Flex>
            <Flex mr={16}>
              <Text fontSize={"19px"}>Offer Range</Text>
              <Tooltip shouldWrapChildren label="test" placement="top-end">
                <Icon as={VscInfo} />
              </Tooltip>
            </Flex>
            <Flex mr={16}>
              <Text fontSize={"19px"}>Highest</Text>
              <Tooltip shouldWrapChildren label="test" placement="top-end">
                <Icon as={VscInfo} />
              </Tooltip>
            </Flex>
            <Flex mr={16}>
              <Text fontSize={"19px"}>Lowest</Text>
              <Tooltip shouldWrapChildren label="test" placement="top-end">
                <Icon as={VscInfo} />
              </Tooltip>
            </Flex>
          </Flex>
          <Icon
            as={hearted ? MdOutlineFavorite : MdOutlineFavoriteBorder}
            fontSize={18}
            onClick={() => onHeartOrUnheartKeyboard(keyboardData, hearted)}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Header;
