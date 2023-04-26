import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Card from "../Card/Card";
import SideIcons from "../SideIcons/SideIcons";
import TechStacks from "../TechStacks/TechStacks";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../assets/Vinayak.jpeg"
import { Button } from "../Button/Button";
import About from "../About/About";
import { projects } from "../../Utils/Projects";
import Contact from "../Contact/Contact";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import GitHub from "../Calender/calender";
import Experience from "../experience/Experience";
// import Experiences from '../Experiences/Experiences';



const Home = ({ scrollRef }) => {
  const [projectArray, setProjectArray] = useState(projects.slice(0, 4));
  const { newTheme } = React.useContext(ThemeContext);
  const [offset, setOffset] = useState(0);
  const [location, setLocation] = useState(0);
  useEffect(() => {
    AOS.init();
  });

  const handleOffset = () => {
    setOffset(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleOffset);
    return () => window.removeEventListener("scroll", handleOffset);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = newTheme.background;
  }, [newTheme]);

  const handleButton = () => {};

  console.log(offset);
  const handleShowMoreBtn = () => {
    if (projects.length === projectArray.length) {
      setProjectArray(projects.slice(0, 4));
      window.scrollTo(0, location);
    } else {
      setProjectArray(projects);
      setLocation(offset);
    }
  };

  const handleResume = () => {
    fetch("Vinayak_Pagar_Resume_.pdf").then((res) => {
      res.blob().then((blob) => {
        const fileUrl = window.URL.createObjectURL(blob);
        let file = document.createElement("a");
        file.href = fileUrl;
        file.download = "Vinayak_Pagar_Resume_.pdf";
        file.click();
      });
    });
  };

  return (
    <div ref={scrollRef} className={styles.suraj}>
      <SideIcons />
      <div
        id="home"
        className={styles.profile}
        style={{ backgroundColor: `${newTheme.imgBackground}` }}
      >
        <div
          data-aos="fade-zoom-out"
          className={styles.intro}
          style={{
            color: `${newTheme.para}`,
            transform: `translateX(-${offset * 2.5}px)`,
            opacity: `${offset > 300 ? "0" : offset > 160 ? ".5" : "1"}`,
          }}
        >
          <h1>
            <span>Hey👋, I'm </span>
            <div className={styles.name} style={{ color: `${newTheme.title}` }} id="user-detail-name">
              Vinayak.
            </div>
          </h1>
          <h1 id="user-detail-intro">Full Stack Web Developer.</h1>
          <div className={styles.btn}>
            <a
              href="https://drive.google.com/file/d/1PVQQOvWeb1lxZf041h-Qa-KoBnYlZN7A/view"
              onClick={handleResume}
              id="resume-button-2"
              target="_blank"
              rel="noreferrer"
              download
            >
              {/* resume link have to update above */}
              <Button
                text={
                  <span className={styles.resumeBtn}>
                    <span>Resume</span> <i className="fas fa-file-download"></i>
                  </span>
                }
                handleButton={handleButton}
              />
            </a>
          </div>
        </div>

        <div
          style={{
            transform: `translateX(${offset * 2.5}px)`,
            opacity: `${offset > 300 ? "0" : offset > 160 ? ".5" : "1"}`,
           
          }}
          className={styles.profileImage}
        >
          <img
            src={img1}
            alt="Profile pic"
            className= "home-img"
          />
        </div>
      </div>



      <div
        id="about"
        style={{
          background: `${newTheme.highlightBackground}`,
        }}
        className={styles.experience}
      >
        <About />
      </div>
      <div
        id="about"
        style={{
          background: `${newTheme.highlightBackground}`,
        }}
        className={styles.experience}
      >
        <Experience />
      </div>

      <div id="techStacks" className={styles.techStacks}>
        <TechStacks />
      </div>
        
      <div>
        <GitHub/>
      </div>

      {/* project section from here => */}
      <div id="projects" className={styles.projects}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          Few Things I've Build
        </h1>
        <div className={styles.borderBottom} />
        <div>
          {projectArray.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
        <Button
          text={
            projects.length !== projectArray.length ? "Show More" : "Show Less"
          }
          handleButton={handleShowMoreBtn}
        />
      </div>

      <div
        style={{
          background: `${newTheme.highlightBackground}`,
        }}
      >
        <Contact />
      </div>
    </div>
  );
};

export default Home;
