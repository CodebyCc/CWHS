import React from "react";
import styles from "../styles/Block-section.module.css";
import Image from "next/image";

const BlockFeatured = () => {
  return (
    <div className={styles.container}>
      <article class={styles.gridContainer}>
        <div className={styles.featureImageTwo}>
          <Image
            src="/images/fast@2x.jpg "
            layout="fill"
            objectFit="contain"
            alt=""
          />
        </div>
        <div className={styles.featureContentone}>
          <span className={styles.iconContainer}>
            <svg className={styles.iconPrimary}>
              <use href="/images/sprite.svg#computer"></use>
            </svg>
          </span>
          <h3 className={styles.featureHeading}>Simply Fast Websites</h3>
          <p className={styles.featurePara}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Molestias!Lorem ipsum dolor sit amet, Molestias!Lorem ipsum dolor
            sit amet, consectetur
          </p>
          <p className={styles.linkArrow} href="">
            Learn More
          </p>
        </div>
      </article>
    </div>
  );
};

export default BlockFeatured;
