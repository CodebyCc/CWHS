import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.blockDark}>
      <div className={styles.gridContainer}>
        <section className={styles.footerSection}>
          <div className={styles.collapsibleheader}>
            <h2 className={styles.footerHeading}>PRODUCTS</h2>
          </div>
          <div class="collapsible__content">
            <ul className={styles.list}>
              <li className={styles.listItem}>Website Hosting</li>
              <li className={styles.listItem}>Free Wordpress</li>
              <li className={styles.listItem}>Migration</li>
            </ul>
          </div>
        </section>
        <section className={styles.footerSection}>
          <div className={styles.collapsibleheader}>
            <h2 className={styles.footerHeading}>Company</h2>
          </div>
          <div class="collapsible__content">
            <ul className={styles.list}>
              <li className={styles.listItem}>About</li>
              <li className={styles.listItem}>Affiliates</li>
              <li className={styles.listItem}>Blog</li>
            </ul>
          </div>
        </section>
        <section className={styles.footerSection}>
          <div className={styles.collapsibleheader}>
            <h2 className={styles.footerHeading}>Support</h2>
          </div>
          <div class="collapsible__content">
            <ul className={styles.list}>
              <li className={styles.listItem}>Contact</li>
              <li className={styles.listItem}>Knowledge Base</li>
              <li className={styles.listItem}>FAQ</li>
            </ul>
          </div>
        </section>
        <section className={styles.footerSection}>
          <div className={styles.collapsibleheader}>
            <h2 className={styles.footerHeading}>DOMAINS</h2>
          </div>
          <div class="collapsible__content">
            <ul className={styles.list}>
              <li className={styles.listItem}>Domain Checker</li>
              <li className={styles.listItem}>Domain Transfer</li>
              <li className={styles.listItem}>Free Domain</li>
            </ul>
          </div>
        </section>
      </div>
      <div className={styles.footerBrand}>
        <p className={styles.footerCopyright}>Copyright 2020 George Boateng</p>
      </div>
    </footer>
  );
};

export default Footer;
