import { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils/utils";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="Menu-button"
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
