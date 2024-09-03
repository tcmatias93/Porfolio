import { getImageUrl } from "../../utils/utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I`m Matias Torres</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          voluptatum vitae explicabo non deserunt a, esse optio alias nobis
          adipisci facilis sed odit error labore quo necessitatibus cupiditate
          corrupti obcaecati!
        </p>
        <a href="" className={styles.downloadBtn}>
          Download CV
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Matias Torres"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
