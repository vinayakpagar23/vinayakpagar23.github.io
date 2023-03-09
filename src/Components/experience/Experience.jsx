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
          src={
            "https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
          }
          alt=""
        />
      </div>
      <div className={styles.second}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          Experience
        </h1>
        <div className={styles.borderBottom} />
        <h2 style={{ color: `${newTheme.title}` }} className={styles.heading}>Infosys Ltd</h2>
        <h3 style={{ color: `${newTheme.title}` }} className={styles.aboutMe} >Position : System Engineer (Sept-2021 To Nov-2022)</h3>
        <p style={{ color: `${newTheme.para}` }} className={styles.aboutMe}>
         <li>
           Develop and Manage project as per client Requirement.
         </li>
         <li>
           Handle Incidents that related to the python technology.
         </li>
         <li>
           Worked on jupyterhub, Docker, Django, Flask,Aws SageMaker, Azure Machine Learning tools.
         </li>
        </p>
      </div>
    </div>
  );
};

export default Experience;
