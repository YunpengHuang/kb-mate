import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export interface Keyboard {
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
}

interface KeyboardSnippet {
  KeyboardId: string;
}

interface KeyboardState {
  KbSnippets: KeyboardSnippet[];
}

const defaultKeyboardState: KeyboardState = {
  KbSnippets: [],
};

export const keyboardState = atom<KeyboardState>({
  key: "keyboardState",
  default: defaultKeyboardState,
});
