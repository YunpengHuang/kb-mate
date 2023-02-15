import React from "react";
import { Card } from "../../atoms/cardAtom";
import { BsChat, BsDot } from "react-icons/bs";
import { MdOutlineShare } from "react-icons/md";
import { Flex } from "@chakra-ui/react";

type ProductItemProps = {
  card: Card;
  numberOfMembers?: number;
  onSelectCard: () => void;
};

const ProductItem: React.FC<ProductItemProps> = ({
  card,
  numberOfMembers,
  onSelectCard,
}) => {
  return (
    <Flex border={"1px solid"} bg="white">
      {card.id}
    </Flex>
  );
};
export default ProductItem;
