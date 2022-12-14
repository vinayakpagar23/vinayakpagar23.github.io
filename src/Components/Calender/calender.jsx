import React from "react";
import GitHubCalendar from "react-github-calendar";
 import "./Github.css";
 import { useContext } from 'react';
 import { ThemeContext } from '../../ContextProvider/ThemeContext';
 
const GitHub = () => {
  const { newTheme } = useContext(ThemeContext);
  const github = {
    margin: "auto",
    border: "5px solid #A3E900",
    padding: "20px",
    borderRadius: "10px",
  };

  return (
    <div className="github">
      <h1 style={{ color: `${newTheme.title}` }}
				>DAYS I CODE</h1>
      
      <div
        w={["100%", "100%", "65%"]}
        style={github}
        className="github_Calender"
       > 

        <GitHubCalendar
          style={{ margin: "auto" }}
          username="vinayakpagar23"
          year={new Date().getFullYear()}
        />
      </div>

    </div>
  );
};

export default GitHub;