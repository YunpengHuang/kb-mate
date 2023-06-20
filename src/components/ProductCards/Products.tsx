import { Card } from "@/src/atoms/cardAtom";
import { KeyboardPartial } from "@/src/atoms/snippetAtom";
import { auth, firestore } from "@/src/firebase/clientApp";
import useCards from "@/src/hooks/useCards";
import { HStack, Stack } from "@chakra-ui/react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import ProductItem from "./ProductItem";

type ProductsProps = {
  keyboardData: KeyboardPartial;
};

const Products: React.FC<ProductsProps> = ({ keyboardData }) => {
  console.log("keyboarddata", keyboardData);
  const [loading, setLoading] = useState(false);
  const [user] = useAuthState(auth);
  const { cardStateValue, setCardStateValue, onSelectCard, onHearted } =
    useCards();

  useEffect(() => {
    const getKeyboard = async () => {
      try {
        const keyboardQuery = query(
          collection(firestore, "keyboards"),
          where("keyboardId", "==", keyboardData.id),
          orderBy("createdAt", "desc")
        );

        const keyboardDocs = await getDocs(keyboardQuery);
        const cards = keyboardDocs.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("cards", cards);

        setCardStateValue((prev) => ({
          ...prev,
          cards: cards as Card[],
        }));
        console.log("getkeyboard", cards);
      } catch (error: any) {
        console.log("getKeyboard error", error.message);
      }
    };

    getKeyboard();
  }, [keyboardData.id, setCardStateValue]);

  return (
    <HStack border={"1px solid green"}>
      {cardStateValue.cards.map((card: Card, index) => (
        <ProductItem
          key={card.id}
          card={card}
          numberOfMembers={1}
          onSelectCard={onSelectCard}
          // TODO add is in user watchlist function here
          inUserWatchList={true}
          onHearted={onHearted}
        />
      ))}
    </HStack>
  );
};
export default Products;
