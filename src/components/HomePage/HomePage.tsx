import { Card } from "@/src/atoms/cardAtom";
import { KeyboardPartial } from "@/src/atoms/snippetAtom";
import React from "react";
import HomePageContent from "../Layout/HomePageContent";
import Products from "../ProductCards/Products";

type HomePageProps = {
  test: KeyboardPartial
};

const HomePage: React.FC<HomePageProps> = ({ test }) => {
  console.log("keyboardata", test)
  return (
    <>
      <HomePageContent>
        <Products keyboardData={test} />
      </HomePageContent>
    </>
  );
};
export default HomePage;
