import React from "react";
import styles from "../styles/Block-dark.module.css";
import Image from "next/image";

const BlockDark = () => {
  return (
    <section className={styles.blockDark}>
      <header className={styles.blockHeader}>
        <h2>User Friendly Control Page</h2>
      </header>
      <div className={styles.gridContainer}>
        <div className={styles.imgContainer}>
          <Image
            src="/images/ipad@2x.png"
            layout="fill"
            objectFit="contain"
            alt=""
          />
        </div>
        <ul className={styles.list}>
          <li>
            <div className={styles.media}>
              <div className={styles.mediaImage}>
                <svg className={styles.iconPrimary}>
                  <use href="images/sprite.svg#snap"></use>
                </svg>
              </div>
              <div className={styles.mediaBody}>
                <h3 className={styles.mediaTitle}>
                  Easy Start & Managed Updates
                </h3>
                <p className={styles.featurePara}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                  nostrum, voluptatibus possimus ullam, molestias adipisci
                  temporibus totam amet, illo similique non dolore? Veritatis
                  eos nam quis earum voluptatem repellat provident?
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.media}>
              <div className={styles.mediaImage}>
                <svg className={styles.iconPrimary}>
                  <use href="images/sprite.svg#settings"></use>
                </svg>
              </div>
              <div className={styles.mediaBody}>
                <h3 className={styles.mediaTitle}>Staging, GIT &Wp-CLI</h3>
                <p className={styles.featurePara}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                  nostrum, voluptatibus possimus ullam, molestias adipisci
                  temporibus totam amet, illo similique non dolore? Veritatis
                  eos nam quis earum voluptatem repellat provident?
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.media}>
              <div className={styles.mediaImage}>
                <svg className={styles.iconPrimary}>
                  <use href="images/sprite.svg#settings"></use>
                </svg>
              </div>
              <div className={styles.mediaBody}>
                <h3 className={styles.mediaTitle}>Dynamic Caching & More</h3>
                <p className={styles.featurePara}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                  nostrum, voluptatibus possimus ullam, molestias adipisci
                  temporibus totam amet, illo similique non dolore? Veritatis
                  eos nam quis earum voluptatem repellat provident?
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BlockDark;
