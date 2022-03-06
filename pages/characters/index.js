import Head from "next/head";
import CharactersList from "../../ui/pages/CharactersList";

export default function Characters() {
  return (
    <>
      <Head>
        <title> StarWars Character Directory</title>
      </Head>
      <CharactersList />
    </>
  );
}