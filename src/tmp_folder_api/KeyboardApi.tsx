//TODO create a api that takes in the python api and store it in the firebase server

import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
  runTransaction,
} from "firebase/firestore";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/clientApp";

type KeyboardApiProps = {};

const KeyboardApi: React.FC<KeyboardApiProps> = () => {
  const [keyboardName, setName] = useState("");
  const [user] = useAuthState(auth);
  const [namError, setNameError] = useState("");

  //TODO link python api check for a valid keyboard name in the database
  const handleCreateKeyboardGroup = async () => {
    try {
      const keyboardDocRef = doc(firestore, "keyboard", keyboardName);

      await runTransaction(firestore, async (transaction) => {
        const keyboardDoc = await transaction.get(keyboardDocRef);

        if (keyboardDoc.exists()) {
          throw new Error(`keyboard name - ${keyboardName} already exist`);
        }
        transaction.set(keyboardDocRef, {
          keyboardId: keyboardName,
          createdAt: serverTimestamp(),
          keybordSize: null,
          buyCount: 0,
          sellCount: 0,
        });

        transaction.set(doc(firestore, `users/${user?.uid}/keyboardSnippets`, keyboardName), {
            //might need to change keyboardId name
            KeyboardId: keyboardName,
            purchased: false,
        })
      });
    } catch (error: any) {
      console.log("Transcation error", error);
      setNameError(error.message);
    }
  };

  return <div>Have a good coding</div>;
};
export default KeyboardApi;
