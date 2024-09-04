import React from "react";
import style from "./Contanct.module.css";
import { getImageUrl } from "../../utils/utils";

const Contact = () => {
  return (
    <footer className={style.container}>
      <div className={style.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={style.links}>
        <li className={style.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:tcontreras993@gmail.com">tcontreras993@gmail.com</a>
        </li>
        <li className={style.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="Linkedin icon"
          />
          <a href="https://www.linkedin.com/in/matias-torres-contreras/">
            linkedin.com/matias-torres-contreras/
          </a>
        </li>
        <li className={style.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/tcmatias93">github.com/tcmatias93</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
