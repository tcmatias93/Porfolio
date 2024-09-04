import { getImageUrl } from "../../utils/utils";
import styles from "./Experience.module.css";

const Jobs = (jobs) => {
  if (!jobs) {
    return null;
  }
  return (
    <ul className={styles.jobs}>
      {jobs.jobs.map((job, id) => {
        return (
          <li key={id} className={styles.jobsItem}>
            <img
              src={getImageUrl(job.imageSrc)}
              alt={`${job.organisation} Logo`}
            />
            <div className={styles.jobItemDetails}>
              <h3>
                {job.role}, {job.organisation}{" "}
              </h3>
              <p>
                {job.startDate} - {job.endDate}{" "}
              </p>
              <ul>
                {job.experiences.map((experience, id) => {
                  return <li key={id}>{experience}</li>;
                })}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Jobs;
