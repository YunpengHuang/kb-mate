import { Keyboard } from "@/src/atoms/keyboardatom";
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
    return <div>keyboard does not exist</div>;
  }
  return <div>Keyboard is {keyboardData.id} </div>;
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
