import Head from "next/head";
import HomePage from "../ui/pages/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page - StarWars Character Directory</title>
      </Head>
      <HomePage />
    </>
  );
}
