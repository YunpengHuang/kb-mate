import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import { Keyboard, keyboardState } from "../atoms/keyboardatom";
import { auth, firestore } from "../firebase/clientApp";

const useKeyboardData = () => {
  const [user] = useAuthState(auth);
  const [keyboardStateValue, setKeyboardStateValue] =
    useRecoilState(keyboardState);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onHeartOrUnheartKeyboard = (
    keyboardData: Keyboard,
    hearted: boolean
  ) => {
    if (hearted) {
      unheartKeyboard(keyboardData.id);
      return;
    }
    heartKeyboard(keyboardData);
  };

  const heartKeyboard = (keyboardData: Keyboard) => {};

  const unheartKeyboard = (keyboardId: string) => {};

  useEffect(() => {
    const getKbSnippets = async () => {
      try {
        const snippetDocs = await getDocs(
          collection(firestore, `user/${user?.uid}keyboardSnippets`)
        );

        const snippets = snippetDocs.docs.map((doc) => ({ ...doc.data }));
        console.log("here are snippets", snippets);
      } catch (error) {
        console.log("snippet error", error);
      }
    };
    if (!user) return;
    getKbSnippets();
  }, [user]);

  return {
    keyboardStateValue,
    onHeartOrUnheartKeyboard,
  };
};
export default useKeyboardData;
