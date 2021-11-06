import React, { useEffect, useState } from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.scss';


const ThemeToggle = () => {
  const selectedTheme =
    (localStorage && localStorage.getItem("theme")) || "dark";

const [isDarkTheme, setTheme] = useState(selectedTheme === 'dark');

  
  useEffect(() => {
    const theme = isDarkTheme ? 'dark' : 'light';
    localStorage.setItem("theme", theme);
    const body = document.querySelector("body");
    if (theme === "dark") {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [isDarkTheme])

  return (
    <div className="toggle">
      <input type="checkbox" className="checkbox" id="checkbox" checked={isDarkTheme} onChange={() => setTheme(!isDarkTheme)}/>
      <label htmlFor="checkbox" className="label" color="grey">
       <FontAwesomeIcon icon={faSun} color="yellow"/>
       <FontAwesomeIcon icon={faMoon} />
        <div className="ball" />
      </label>
    </div>
  );
};

export default ThemeToggle;
