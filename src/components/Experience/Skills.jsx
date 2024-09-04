import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils/utils";

const Skills = (skills) => {
  if (!skills) {
    return null;
  }

  return (
    <div className={styles.skills}>
      {skills.skills.map((skill, id) => {
        return (
          <div key={id} className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
            </div>
            <p>{skill.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
