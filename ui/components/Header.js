import React from "react";
import styles from "../../styles/Header.module.scss";

const Header = ({ title }) => {
  const content = title || `Welcome to Star Wars Character Directory, Today is ${new Date().toLocaleDateString()}`;
  return <div className={styles.header}>{content}</div>;
};

export default Header;
