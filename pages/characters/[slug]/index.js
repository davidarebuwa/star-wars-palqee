import Head from "next/head";
import { GET_CHARACTER } from "../../../apollo/queries";
import CharacterDetail from "../../../ui/pages/CharacterDetail";
import client from "../../../apollo/apollo-client";

export default function CharactersDetail({ character }) {
    const {
        name,
        filmConnection: { films },
      } = character;
  return (
    <>
      <Head>
        <title>Detail - {name}</title>
      </Head>
      <CharacterDetail character={character} />
    </>
  );
}
export async function getServerSideProps({ params }) {
  const { slug } = params;
  const id = (slug || "").split("-").pop();

  const { data } = await client.query({
    query: GET_CHARACTER,
    variables: {
      id,
    },
  });

  const character = data.person;

  if (!character) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      character,
    },
  };
}
