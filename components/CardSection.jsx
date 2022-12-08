import React from "react";
import Card from "./Card";

import styles from "../styles/Card.module.css";
import CardPrimary from "./CardPrimary";

const CardSection = () => {
  return (
    <section className={styles.blockContainer}>
      <div className={styles.grid} data-aos="fade-up">
        <Card />
        <CardPrimary />
        <Card />
      </div>
    </section>
  );
};

export default CardSection;
