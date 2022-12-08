import React from "react";
import styles from "../styles/Block-domain.module.css";

const BlockDomain = () => {
  return (
    <section className={styles.blockDomain}>
      <header className={styles.blockHeader}>
        <h2 className={styles.h2}>Starting at $9 per month</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus?</p>
      </header>
      <div className={styles.inputGroup}>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter domain name here"
        />
        <button className={styles.btnAccent}>
          Search
          <svg className={styles.iconWhite}>
            <use href="Images/sprite.svg#search"></use>
          </svg>
        </button>
      </div>
      <ul className={styles.blockDomainPrices}>
        <li>
          <span className={styles.badgeSecondary}>.com $9</span>
        </li>
        <li>sg $10</li>
        <li>.space $11</li>
        <li>.info $14</li>
        <li>.net $10</li>
        <li>.xyz $10</li>
      </ul>
    </section>
  );
};

export default BlockDomain;
