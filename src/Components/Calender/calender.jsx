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
      
      <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",marginTop:50}}>
  <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com/?user=vinayakpagar23&theme=react" alt="Manoj Gajare" height="250px" width="47%" />
  <img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=vinayakpagar23&show_icons=true&theme=react" height="255px" width="47%"/>
  <img  style={{paddingTop:50}} id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=vinayakpagar23&theme=react&langs_count=8" alt="language" height="260px" width="100%" />
</div>
    </div>
  );
};

export default GitHub;