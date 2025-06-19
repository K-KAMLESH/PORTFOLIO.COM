import React from "react";
import styles from "./About.module.css";
function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div classname={styles.content}>
        <img
          src="/about.png"
          alt="About Pic"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="/cursor.png" alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>FrontEnd Developer</h3>
              <p>
                i am a FrontEnd developer with experience in building responsive
                and optimized sites{" "}
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/serverIcon.png" alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>BackEnd Developer</h3>
              <p>
                i have experience developing fast and optimized backend system
                and APIs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/cursor.png" alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>UI designer</h3>
              <p>
                i have designed multiple landing pages and created designes
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
