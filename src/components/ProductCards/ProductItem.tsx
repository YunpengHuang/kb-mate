import React from "react";
import { Card } from "../../atoms/cardAtom";
import { BsChat, BsDot } from "react-icons/bs";
import { MdOutlineShare } from "react-icons/md";
import { Box, Flex, GridItem, Image, Stack, Text } from "@chakra-ui/react";
import moment from "moment";

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
      borderRadius={4}
      _hover={{ borderColor: "gray.500" }}
      cursor="pointer"
      onClick={onSelectCard}
      direction="column"
    >
      <Image
        src="https://via.placeholder.com/1280x720"
        alt="keyboard"
        mr={6}
        sizes="50px"
      />
      <Flex direction={"column"} width="100%">
        <Stack spacing={1} p="10px">
          <Stack
            direction={"row"}
            spacing={0.6}
            align="center"
            fontSize={"10pt"}
          >
            <Text>keyboard added at {moment(new Date(card.createdAt.seconds * 1000)).fromNow()}</Text>
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
};
export default ProductItem;
