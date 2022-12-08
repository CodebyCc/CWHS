import React from "react";
import Image from "next/image";
import styles from "../styles/Block.module.css";

const Block = () => {
  return (
    <section className={styles.block}>
      <div className={styles.gridContainer}>
        <header className={styles.blockHeader}>
          <h1 className={styles.blockHeading}>Cloud Hosting for Pros</h1>
          <p className={styles.heroTagline}>
            Deploy your websites in less than 60 seconds
          </p>
          <button className={styles.btn}>Get Started</button>
        </header>
        <div className={styles.imgContainer}>
          <Image src="/images/banner@2x.webp " alt="" layout="fill" />
        </div>
      </div>
    </section>
  );
};

export default Block;
