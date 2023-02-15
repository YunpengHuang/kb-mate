import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export type Card = {
  id: string;
  createdAt?: Timestamp;
  keyboardSize:
    | "10"
    | "40"
    | "50"
    | "55"
    | "60"
    | "65"
    | "66"
    | "67"
    | "68"
    | "70"
    | "75"
    | "80"
    | "87"
    | "90"
    | "96"
    | "100"
    | "split"
    | "tkl"
    | "wkl";
  buyCounter: number;
  sellCounter: number;
  watchlistmember: number;
}

interface CardState {
  selectCard: Card | null;
  cards: Card[];
}

export const defaultCardState: CardState = {
  selectCard: null,
  cards: [],
};

export const cardState = atom<CardState>({
  key: "cardState",
  default: defaultCardState,
});
