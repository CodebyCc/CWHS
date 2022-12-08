import React from "react";
import Image from "next/image";
import styles from "../styles/Block-section.module.css";

const BlockContainer = (props) => {
  return (
    <section className={styles.container}>
      <div>
        <article class={styles.gridContainer}>
          <div className={styles.featureContent}>
            <span className={styles.iconContainer}>
              <svg className={styles.iconPrimary}>
                <use href={props.svg}></use>
              </svg>
            </span>
            <h3 className={styles.featureHeading}>{props.h3}</h3>
            <p className={styles.featurePara}>{props.p}</p>
            <p className={styles.linkArrow} href="">
              Learn More
            </p>
          </div>
          <div className={styles.featureImage}>
            <Image src={props.img} layout="fill" objectFit="contain" alt="" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlockContainer;
