import React from "react";
import { Card } from "../../atoms/cardAtom";
import { BsChat, BsDot } from "react-icons/bs";
import { MdOutlineShare } from "react-icons/md";
import {
  Badge,
  Box,
  Flex,
  GridItem,
  Icon,
  Image,
  Stack,
  Text,
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
      alignItems="center"
      _hover={{ borderColor: "gray.500" }}
      cursor="pointer"
      onClick={onSelectCard}
      direction="column"
      justify={"center"}
      border="2px solid green"
    >
      {card.imageURL ? (
        <Flex
          justify={"center"}
          align="center"
          justifyContent="center"
          alignItems={"center"}
        >
          <Image src={card.imageURL} alt="keyboard" objectPosition={"center"} />
        </Flex>
      ) : (
        <Flex justify={"center"} align="center" justifyContent={"center"}>
          <Image
            src="https://via.placeholder.com/1280x720"
            alt="placeholder"
            minWidth={"300px"}
            objectPosition={"center"}
          />
        </Flex>
      )}

      <Flex
        direction={"column"}
        width="100%"
        border={"1px solid orange"}
        height="100%"
        justify={"center"}
      >
        <Stack spacing={1} p="10px">
          <Stack
            direction={"row"}
            spacing={0.6}
            align="center"
            fontSize={"10pt"}
          >
            <Text textAlign={'left'}>
              <Icon as={TbKeyboard} />
              added
              <Badge colorScheme={"blue"}>
                {moment(new Date(card.createdAt.seconds * 1000)).fromNow()}
              </Badge>
            </Text>
          </Stack>
          <Text>{card.id}</Text>
        </Stack>
      </Flex>
    </Flex>
  );
};
export default ProductItem;
