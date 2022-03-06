import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import styles from "../../styles/HomePage.module.scss";
import SectionTitle from "../components/SectionTitle";
import SectionDescription from "../components/SectionDescription";

const HomePage = () => {
  return (
    <div className={styles.home}>
      <Breadcrumb />
      <SectionTitle />
      <SectionDescription />
    </div>
  );
};

export default HomePage;
