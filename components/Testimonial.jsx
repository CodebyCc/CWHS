import React from "react";
import styles from "../styles/Testimonial.module.css";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div>
      <section className={styles.block}>
        <header className={styles.blockHeader}>
          <h2>What our customers are saying</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </header>
        <div className={styles.container}>
          <div className={styles.cardTestimonial}>
            <div className={styles.gridContainer}>
              <div className={styles.testimonialImage}>
                <Image
                  src="/images/testimonial.jpg"
                  alt="A happy smiling customer"
                  layout="fill"
                  objectFit="contain"
                />
                <span className={styles.iconContainerAccent}>
                  <svg className={styles.iconWhite}>
                    <use href="Images/sprite.svg#quotes"></use>
                  </svg>
                </span>
              </div>
              <blockquote className={styles.quote}>
                <p className={styles.quoteText}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                  quis non, rerum mollitia aperiam minima enim? Necessitatibus
                  voluptatum totam veritatis?
                </p>
                <footer>
                  <div className={styles.media}>
                    <div className={styles.mediaImage}>
                      <svg className={styles.iconPrimary}>
                        <use href="Images/sprite.svg#line"></use>
                      </svg>
                    </div>
                    <div className={styles.mediaBody}>
                      <h3 className={styles.quoteAuthor}>John Smith</h3>
                      <p className={styles.quoteCompany}>ABC Company</p>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.calloutPrimary}>
        <div className={styles.gridContainerC}>
          <div className={styles.calloutContent}>
            <h2 className={styles.calloutHeading}>Ready to get Started</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              magnam, cum nemo id quae pariatur laudantium facere veritatis in
            </p>
          </div>
          <button className={styles.btnStretch}>Get Started Now</button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
