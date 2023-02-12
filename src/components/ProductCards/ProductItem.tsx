import React from "react";
import { KeyboardPartial } from "../../atoms/snippetAtom";
import { BsChat, BsDot } from "react-icons/bs";
import { MdOutlineShare } from "react-icons/md";
import { Flex } from "@chakra-ui/react";

type ProductItemProps = {
  keyboard: KeyboardPartial;
  numberOfMembers?: number;
  onSelectCard: () => void;
};

const ProductItem: React.FC<ProductItemProps> = ({
  keyboard,
  numberOfMembers,
  onSelectCard,
}) => {
  return (
    <Flex border={"1px solid"} bg="white">
      {keyboard.id}
    </Flex>
  );
};
export default ProductItem;
