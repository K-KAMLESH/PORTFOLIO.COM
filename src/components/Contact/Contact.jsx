import React from "react";
import styles from "./Contact.module.css";
function Contact() {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="email.png" alt="email icon" />
          <a href="mailto:indiankamleshbairwa@gmail.com">kamlesh@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src="linkedin.png" alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/kamlesh-bairwa-2398a3191">
            LinkedIn.com/kamlesh
          </a>
        </li>
        <li className={styles.link}>
          <img src="github.png" alt="github icon" />
          <a href="https://github.com/K-KAMLESH/">GithubHub.com/kamlesh</a>
        </li>{" "}
        <li className={styles.link}>
          <img src="whatsapp.png" alt="whatsapp icon" />
          <a href="https://wa.me/7877449689">Chat on whatsapp</a>
        </li>{" "}
        <li className={styles.link}>
          <img src="instagram.png" alt="instagram icon" />
          <a href="https://instagram.com">instagram.com/kamlesh.exe</a>
        </li>
      </ul>
    </footer>
  );
}

export default Contact;
