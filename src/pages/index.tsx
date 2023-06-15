import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/clientApp";
import { useRecoilValue } from "recoil";
import { keyboardState } from "../atoms/snippetAtom";
import { useEffect, useState } from "react";
import HomePageContent from "../components/Layout/HomePageContent";
import Products from "../components/ProductCards/Products";
import {
  collection,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import useCards from "../hooks/useCards";
import { Card } from "../atoms/cardAtom";
import {
  Flex,
  Grid,
  GridItem,
  HStack,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import ProductItem from "../components/ProductCards/ProductItem";
import CardLoader from "../components/ProductCards/CardLoader";

const inter = Inter({ subsets: ["latin"] });

//TODO populate the page with 12 cards (think about infinite-scrolling or load more button)
export default function Home() {
  // const hearted = !!keyboardStateValue.kbSnippets.find(
  //   (item) => item.keyboardId === keyboardData.id
  // );
  const [user, loadingUser] = useAuthState(auth);
  const keyboardStateValue = useRecoilValue(keyboardState);
  const [loading, setLoading] = useState(false);
  const { cardStateValue, setCardStateValue, onSelectCard, onHearted } =
    useCards();

  const getHomeFeed = async () => {
    setLoading(true);
    try {
      const homePageQuery = query(
        collection(firestore, "keyboards"),
        orderBy("createdAt", "desc"),
        limit(12)
      );
      const cardDocs = await getDocs(homePageQuery);
      const cards = cardDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setCardStateValue((prev) => ({
        ...prev,
        cards: cards as Card[],
      }));
      // console.log("home feed", cards);
    } catch (error: any) {
      console.log("homepage error", error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getHomeFeed();
    // TODO fix use effect hook
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <CardLoader />
      ) : (
        <HomePageContent>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            }}
            gap={6}
            justifyContent="center"
            width={"85%"}
            height={"100%"}
          >
            {cardStateValue.cards.map((card: Card, index) => (
              <GridItem key={index}>
                <ProductItem
                  key={card.id}
                  card={card}
                  onSelectCard={onSelectCard}
                  inUserWatchList={true}
                  onHearted={onHearted}
                />
              </GridItem>
            ))}
          </Grid>
        </HomePageContent>
      )}
    </>
  );
}
