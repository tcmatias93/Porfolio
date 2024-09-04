import styles from "./Experience.module.css";
import Skills from "./Skills";
import Jobs from "./Jobs";
import skills from "../../data/skills.json";
import jobs from "../../data/jobs.json";

const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <Skills skills={skills} />
        <Jobs jobs={jobs} />
      </div>
    </section>
  );
};

export default Experience;
