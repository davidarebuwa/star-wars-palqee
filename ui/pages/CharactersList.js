import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import styles from "../../styles/CharactersPage.module.scss";
import Table from "../components/Table";
import SectionTitle from "../components/SectionTitle";
import SectionDescription from "../components/SectionDescription";

const CharactersList = () => {
  return (
    <div className={styles.characters}>
      <Breadcrumb />
      <SectionTitle>Characters</SectionTitle>
      <SectionDescription />
      <Table />
    </div>
  );
};

export default CharactersList;
