import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
// import WindowSize from "../../Utils/WindowSize";
import styles from "./Experience.module.css";

const Experience = () => {
  const { newTheme } = React.useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
    >
      <div className={styles.first}>
        <img
          src={"https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"}
          alt=""
        />
      </div>
      <div className={styles.second}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          Experience
        </h1>
        {/* mpl experience */}

        <div className={styles.borderBottom} />
        <h2 style={{ color: `${newTheme.title}` }} className={styles.heading}>MPL (Mobile Premier League)
        </h2>
        <h3 style={{ color: `${newTheme.title}` }} className={styles.aboutMe}>
          Position : Software Development Engineer-1 (June-2023 To Sept-2023)
        </h3>
        <p style={{ color: `${newTheme.para}` }} className={styles.aboutMe}>
          <li>
            Contributed to MPL dashboard development, highlighting proficiency
            in frontend and backend technologies.
          </li>
          <li>
            Utilized React.js, GraphQL, Node.js, and managed MongoDB to create a
            resilient system.
          </li>
        </p>

        {/* infosys experince */}
        <h2 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          Infosys Ltd
        </h2>
        <h3 style={{ color: `${newTheme.title}` }} className={styles.aboutMe}>
          Position : System Engineer (Sept-2021 To Nov-2022)
        </h3>
        <p style={{ color: `${newTheme.para}` }} className={styles.aboutMe}>
          <li>Designed a project to meet client specifications.</li>
          <li>
            Demonstrated expertise in React.js, JavaScript, Django, Flask,
            Docker, MySQL, HTML, and CSS.
          </li>
          <li>Successfully managed Python-related incidents.</li>
          <li>
            Provided support for Python+ software to enhance Python project
            development efficiency.
          </li>
        </p>
      </div>
    </div>
  );
};

export default Experience;
