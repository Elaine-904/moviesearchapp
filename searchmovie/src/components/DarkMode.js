import React, { useState, useEffect } from "react";
import "../styles/DarkMode.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons"
import { faMoon } from "@fortawesome/free-solid-svg-icons"

const DarkMode = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";

  const [theme, setTheme] = useState(darkTheme)
  
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    console.log(localTheme)
    if (localTheme) {
      setTheme(localTheme);
      body.classList.add(theme);

    } else {
      body.classList.add(lightTheme);
      window.localStorage.setItem('theme', 'light');


    }
  }, [theme])

  const themeToggle = (e) => {
    if (theme === 'light') {
      setTheme('dark')
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.remove(clickedClass);
      window.localStorage.setItem('theme', 'dark');
    }
    else {
      setTheme('light')
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      window.localStorage.setItem('theme', 'light');
    }
  };

  

  return (
    <button
      className={theme === "dark" ? clickedClass : ""}
      id="darkMode"
      onClick={(e) => themeToggle(e)}
    >
      {theme === "dark" ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
    </button>
  );
};

export default DarkMode;