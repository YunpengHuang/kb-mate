import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export interface KeyboardPartial {
  id: string;
  createdAt?: Timestamp;
}

export interface KeyboardSnippet {
  keyboardId: string;
}

interface KeyboardState {
  kbSnippets: KeyboardSnippet[];
}

export const defaultKeyboardState: KeyboardState = {
  kbSnippets: [],
};

export const keyboardState = atom<KeyboardState>({
  key: "keyboardState",
  default: defaultKeyboardState,
});
