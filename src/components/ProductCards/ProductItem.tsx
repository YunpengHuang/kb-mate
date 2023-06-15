import React from "react";
import { Card } from "../../atoms/cardAtom";
import { BsChat, BsDot } from "react-icons/bs";
import { MdOutlineShare, MdBookmark, MdBookmarkBorder } from "react-icons/md";
import {
  Badge,
  Box,
  Divider,
  Flex,
  GridItem,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import moment from "moment";
import { TbKeyboard } from "react-icons/tb";

type ProductItemProps = {
  card: Card;
  numberOfMembers?: number;
  onSelectCard: () => void;
  inUserWatchList?: boolean;
  onHearted: () => void;
};

const ProductItem: React.FC<ProductItemProps> = ({
  card,
  numberOfMembers,
  onSelectCard,
  inUserWatchList,
  onHearted,
}) => {
  return (
    <Flex
      p={4}
      bg="gray.100"
      borderColor={"gray.300"}
      borderRadius={"lg"}
      minWidth="200px"
      borderWidth={"thin"}
      direction="column"
      border="1px solid green"
    >
      {card.imageURL ? (
        <Flex
          justify={"center"}
          align="center"
          justifyContent="center"
          alignItems={"center"}
          _hover={{ borderColor: "gray.500" }}
          cursor="pointer"
          onClick={onSelectCard}
        >
          <Image src={card.imageURL} alt="keyboard" objectPosition={"center"} />
        </Flex>
      ) : (
        <Flex
          justify={"center"}
          align="center"
          justifyContent={"center"}
          _hover={{ borderColor: "gray.500" }}
          cursor="pointer"
          onClick={onSelectCard}
        >
          <Image
            src="https://via.placeholder.com/1280x720"
            alt="placeholder"
            minWidth={"300px"}
            objectPosition={"center"}
          />
        </Flex>
      )}
      <Flex direction={"row"}>
        <Flex
          width={"65%"}
          border={"1px solid orange"}
          // justify={"center"}
        >
          <VStack spacing={1} p="10px" alignItems={"left"}>
            <Stack spacing={2} fontSize={"10pt"} direction="row">
              <Icon as={TbKeyboard} fontSize={18} />
              <Text textAlign={"left"}>added</Text>
              <Badge colorScheme={"blue"}>
                {moment(new Date(card.createdAt.seconds * 1000)).fromNow()}
              </Badge>
            </Stack>
            <Text onClick={onSelectCard} cursor="pointer">
              {card.id}
            </Text>
          </VStack>
        </Flex>

        <Flex width={"35%"} border="1px solid black" direction={"column"}>
          <VStack spacing={1} alignItems="left">
            <Text>Average: </Text>
            <Text>Median: </Text>
          </VStack>
        </Flex>
      </Flex>
      <Divider />
      <Flex ml={1} mb={0.5} color="gray.400">
        <Flex
          align={"center"}
          p="8px 10px"
          _hover={{ bg: "gray.200" }}
          cursor="pointer"
        >
          <Icon as={true ? MdBookmark : MdBookmarkBorder} mr={1} />
          <Text>Save</Text>
        </Flex>
        <Flex
          align={"center"}
          p="8px 10px"
          _hover={{ bg: "gray.200" }}
          cursor="pointer"
        >
          <Icon as={MdOutlineShare} mr={1} />
          <Text>Share</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default ProductItem;
