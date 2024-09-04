import styles from "./About.module.css";
import { getImageUrl } from "../../utils/utils";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
            <div>
              <h3>Frontend Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                ratione voluptatum sint debitis error tenetur illum tempora
                ullam repellendus?
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
            <div>
              <h3>Backend Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                ratione voluptatum sint debitis error tenetur illum tempora
                ullam repellendus?
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Ui Icon" />
            <div>
              <h3>UI Designer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                ratione voluptatum sint debitis error tenetur illum tempora
                ullam repellendus?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
