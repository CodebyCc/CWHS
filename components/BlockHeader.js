import React from "react";
import styles from "../styles/Block-section.module.css";

const BlockHeader = () => {
  return (
    <section className={styles.container}>
      <header className={styles.blockHeader}>
        <h2 className={styles.Head}>Host On The Cloud To Keep Growing</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </header>
    </section>
  );
};

export default BlockHeader;
