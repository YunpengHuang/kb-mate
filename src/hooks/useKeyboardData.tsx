import {
  collection,
  doc,
  getDocs,
  increment,
  writeBatch,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState, useSetRecoilState } from "recoil";
import { authModalState } from "../atoms/authModalAtom";
import {
  KeyboardPartial,
  KeyboardSnippet,
  keyboardState,
} from "../atoms/snippetAtom";
import { auth, firestore } from "../firebase/clientApp";

const useKeyboardData = () => {
  const [user] = useAuthState(auth);
  const [keyboardStateValue, setKeyboardStateValue] =
    useRecoilState(keyboardState);
  const setAuthModalState = useSetRecoilState(authModalState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onHeartOrUnheartKeyboard = (
    keyboardData: KeyboardPartial,
    hearted: boolean
  ) => {
    if (!user) {
      setAuthModalState({ open: true, view: "login" });
      return;
    }

    setLoading(true);
    if (hearted) {
      unheartKeyboard(keyboardData.id);
      return;
    }
    heartKeyboard(keyboardData);
  };

  const heartKeyboard = async (keyboardData: KeyboardPartial) => {
    try {
      const batch = writeBatch(firestore);

      const newSnippet: KeyboardSnippet = {
        keyboardId: keyboardData.id,
      };

      batch.set(
        doc(firestore, `users/${user?.uid}/keyboardSnippets`, keyboardData.id),
        newSnippet
      );

      batch.update(doc(firestore, "keyboards", keyboardData.id), {
        watchlistMembers: increment(1),
      });
      await batch.commit();

      setKeyboardStateValue((prev) => ({
        ...prev,
        kbSnippets: [...prev.kbSnippets, newSnippet],
      }));
    } catch (error: any) {
      console.log("heartkeyboard", error);
      setError(error.message);
    }
  };

  const unheartKeyboard = async (keyboardId: string) => {
    try {
      const batch = writeBatch(firestore);

      batch.delete(
        doc(firestore, `users/${user?.uid}/keyboardSnippets`, keyboardId)
      );

      batch.update(doc(firestore, "keyboards", keyboardId), {
        watchlistMembers: increment(-1),
      });

      await batch.commit();

      setKeyboardStateValue((prev) => ({
        ...prev,
        kbSnippets: prev.kbSnippets.filter(
          (item) => item.keyboardId !== keyboardId
        ),
      }));
    } catch (error: any) {
      console.log("unhearted", error);
      setError(error.message);
    }

    setLoading(false);
  };

  const getKbSnippets = async () => {
    setLoading(true);
    try {
      const snippetDocs = await getDocs(
        collection(firestore, `users/${user?.uid}/keyboardSnippets`)
      );

      const snippets = snippetDocs.docs.map((doc) => ({ ...doc.data() }));
      setKeyboardStateValue((prev) => ({
        ...prev,
        kbSnippets: snippets as KeyboardSnippet[],
      }));
    } catch (error: any) {
      console.log("snippet error", error);
      setError(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!user) return;
    getKbSnippets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return {
    keyboardStateValue,
    onHeartOrUnheartKeyboard,
    loading,
    setKeyboardStateValue,
  };
};
export default useKeyboardData;
