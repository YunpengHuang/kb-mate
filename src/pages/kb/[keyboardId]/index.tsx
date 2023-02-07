import { Keyboard } from "@/src/atoms/keyboardatom";
import Header from "@/src/components/Keyboard/Header";
import NotFound from "@/src/components/Keyboard/NotFound";
import { firestore } from "@/src/firebase/clientApp";
import { doc, getDoc } from "firebase/firestore";
import { GetServerSidePropsContext } from "next";
import React from "react";
import safejsonStringify from "safe-json-stringify";

type KeyboardPageProps = {
  keyboardData: Keyboard;
};

const KeyboardPage: React.FC<KeyboardPageProps> = ({ keyboardData }) => {
  if (!keyboardData) {
    return <NotFound/>;
  }
  return (
    <>
    <Header keyboardData={keyboardData}/>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const keyboardDocRef = doc(
      firestore,
      "keyboards",
      context.query.keyboardId as string
    );
    const keyboardDoc = await getDoc(keyboardDocRef);

    return {
      props: {
        keyboardData: keyboardDoc.exists()
          ? JSON.parse(
              safejsonStringify({ id: keyboardDoc.id, ...keyboardDoc.data() })
            )
          : "",
      },
    };
  } catch (error) {
    //TODO add error page, instead of console log
    console.log("getServerSideProps error", error);
  }
}

export default KeyboardPage;
