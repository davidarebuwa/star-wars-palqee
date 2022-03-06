import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import styles from "../../styles/CharactersPage.module.scss";
import SectionTitle from "../components/SectionTitle";
import SectionDescription from "../components/SectionDescription";
import Films from "../components/Films";

const CharacterDetail = ({ character }) => {
  const {
    name,
    filmConnection: { films },
  } = character;
  return (
    <div className={styles.characters}>
      <Breadcrumb characterSlug={name} />
      {name && <SectionTitle>{name}</SectionTitle>}
      <SectionDescription />
      {films && <Films list={films} />}
    </div>
  );
};

export default CharacterDetail;
