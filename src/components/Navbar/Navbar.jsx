import React from "react";
import styles from "./Navbar.module.css";
import { useState } from "react";
// import { getImageUrl } from "../../utils";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        K$KAMLESH
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? "/assets/nav/close_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
              : "/assets/nav/menu_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
          }
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          alt="menuicon"
          width="42px"
        />

        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experiance</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
