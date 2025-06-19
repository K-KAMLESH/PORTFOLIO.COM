import React from "react";
import styles from "./Hero.module.css";
function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi i am KAMLESH BAIRWA</h1>
        <p className={styles.description}>
          i am a full-stack developer ~ Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium soluta ut doloremque magnam molestiae
        </p>
        <a
          className={styles.contactBtn}
          href="mailto:indiankamleshbairwa@gmail.com"
        >
          contact me
        </a>
      </div>
      <img
        className={styles.heroImage}
        src="heroImage.png"
        alt="heroImage of me"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

export default Hero;
