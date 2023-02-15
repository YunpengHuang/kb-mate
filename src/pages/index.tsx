import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/clientApp";
import { useRecoilValue } from "recoil";
import { keyboardState } from "../atoms/snippetAtom";
import { useState } from "react";
import HomePageContent from "../components/Layout/HomePageContent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [user, loadingUser] = useAuthState(auth);
  const keyboardStateValue = useRecoilValue(keyboardState);
  const [loading, setLoading] = useState(false);

  const getHomeFeed = async () => {
    console.log("get home feed");
    setLoading(true);
    try {
      const currentKeyboardIds = keyboardStateValue.kbSnippets.map(
        (snippet) => snippet.keyboardId
      );

      //TODO populate the page with 12 cards (implement infinite-scrolling later)
    } catch (error) {}
  };
  return <HomePageContent>
    <></>
  </HomePageContent>;
}
