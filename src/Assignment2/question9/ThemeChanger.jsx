import { React, useContext, useState } from "react";
import { Theme1, Theme2 } from "./ThemeProvider";
import styles from "../assignment.module.css";

const ThemeChanger = () => {
  const theme1 = useContext(Theme1);
  const theme2 = useContext(Theme2);
  const [theme, setTheme] = useState(theme1);
  const [name, setName] = useState("LightMode");

  const changer = () => {
    name === "LightMode" ? setName("DarkMode") : setName("LightMode");
    theme === theme1 ? setTheme("black") : setTheme("white");
  };
  return (
    <div
      className={`${styles.themee} ${
        theme === theme1 ? styles.darktheme : styles.lighttheme
      }`}
    >
      <button onClick={changer} className={styles.button}>
        {name}
      </button>
    </div>
  );
};
export default ThemeChanger;
