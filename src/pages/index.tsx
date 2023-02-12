import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { NextPage } from "next";
import { Card } from "../atoms/cardAtom";
import Products from "../components/ProductCards/Products";

const inter = Inter({ subsets: ["latin"] });

type HomeProps = {
  keyboardData: Card;
};

const Home: React.FC<HomeProps> = ({ keyboardData }) => {
  return (
    <>
      <Products keyboardData={keyboardData} />
    </>
  );
};
export default Home;
