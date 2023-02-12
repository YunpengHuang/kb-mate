import { Card } from "@/src/atoms/cardAtom";
import { KeyboardPartial } from "@/src/atoms/snippetAtom";
import { auth, firestore } from "@/src/firebase/clientApp";
import useCards from "@/src/hooks/useCards";
import useKeyboardData from "@/src/hooks/useKeyboardData";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import ProductItem from "./ProductItem";

type ProductsProps = {
  keyboardData: KeyboardPartial;
};

const Products: React.FC<ProductsProps> = ({ keyboardData }) => {
  const [loading, setLoading] = useState(false);
  const [user] = useAuthState(auth)
  const {cardStateValue, setCardStateValue, onSelectCard} = useCards();
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

      setCardStateValue((prev) => ({
        ...prev,
        cards: cards as Card[],
      }));
      console.log("getkeyboard", cards)
    } catch (error: any) {
      console.log("getKeyboard error", error.message);
    }
  };

  useEffect(() => {
    getKeyboard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // {{
  //   cardStateValue.cards.map((item) => (
  //     <ProductItem keyboard={item} onSelectCard={onSelectCard} />
  //   ));
  // }}
  return <></>;
};
export default Products;
