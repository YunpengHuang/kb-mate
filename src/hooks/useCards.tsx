import React from "react";
import { useRecoilState } from "recoil";
import { cardState } from "../atoms/cardAtom";

const useCards = () => {
  const [cardStateValue, setCardStateValue] = useRecoilState(cardState);

  const onSelectCard = () => {};

  const onHearted = () => {};

  return {
    cardStateValue,
    setCardStateValue,
    onSelectCard,
    onHearted,
  };
};
export default useCards;
