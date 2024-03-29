import { KeyboardPartial } from "@/src/atoms/snippetAtom";
import { Box, Icon, Flex, IconButton, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { VscInfo } from "react-icons/vsc";
import { MdBookmark, MdBookmarkBorder } from "react-icons/md";
import useKeyboardData from "@/src/hooks/useKeyboardData";

type HeaderProps = {
  keyboardData: KeyboardPartial;
};

//TODO Make this layout prettier
const Header: React.FC<HeaderProps> = ({ keyboardData }) => {
  const { keyboardStateValue, onHeartOrUnheartKeyboard, loading} = useKeyboardData();

  const hearted = !!keyboardStateValue.kbSnippets.find(
    (item) => item.keyboardId === keyboardData.id
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
          {/* //TODO make this more fansy */}
          <Icon
            as={hearted ? MdBookmark : MdBookmarkBorder}
            fontSize={20}
            onClick={() => onHeartOrUnheartKeyboard(keyboardData, hearted)}
            _hover={{bg: 'gray.400'}}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Header;
