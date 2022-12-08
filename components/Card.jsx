import React from "react";
import styles from "../styles/Card.module.css";

const Card = () => {
  return (
    <div className={styles.plan}>
      <div className={styles.cardSecondary}>
        <header className={styles.cardHeader}>
          <h3 className={styles.planName}>Entry</h3>
          <span className={styles.planPrice}>$14</span>
          <span className={styles.planBillingCycle}>/Month</span>
          <span class={styles.badgeSecondary}>10% off</span>
          <span className={styles.planDescription}>
            Easy start on the cloud
          </span>
        </header>
        <div className={styles.cardBody}>
          <ul className={styles.listTick}>
            <li className={styles.listItem}>Unlimited Websites</li>
            <li className={styles.listItem}>Unlimited bandwidth</li>
            <li className={styles.listItem}>100GB SSD storage</li>
            <li className={styles.listItem}>3GB RAM</li>
          </ul>
          <button className={styles.btnOutline}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
