import { Keyboard } from "@/src/atoms/keyboardatom";
import { firestore } from "@/src/firebase/clientApp";
import {
  collection,
  FieldPath,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";

type ProductCardsProps = {
  keyboardData: Keyboard;
};

const ProductCards: React.FC<ProductCardsProps> = ({ keyboardData }) => {
  const [loading, setLoading] = useState(false);
  const getKeyboard = async () => {
    try {
      const keyboardQuery = query(
        collection(firestore, "keyboards"),
        where("keyboardId", "==", keyboardData.id),
        orderBy("createdAt", "desc")
      );

      const keyboardDocs = await getDocs(keyboardQuery);
      const keyboards = keyboardDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("keyboards", keyboards);
    } catch (error: any) {
      console.log("getKeyboard error", error.message);
    }
  };

  useEffect(() => {
    getKeyboard();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
};
export default ProductCards;
