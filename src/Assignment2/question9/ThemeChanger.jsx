import { React, useContext, useState } from "react";
import { Theme1, Theme2 } from "./ThemeProvider";
export default function ThemeChanger() {
  const theme1 = useContext(Theme1);
  const theme2 = useContext(Theme2);
  const [theme, setTheme] = useState(theme1);
  const [name, setName] = useState("LightMode");

  const changer = () => {
    theme === theme1 ? setTheme(theme2) : setTheme(theme1);
    name === "LightMode" ? setName("DarkMode") : setName("LightMode");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "larger",
        backgroundColor: theme,
        width: "100%",
        height: "30vh",
      }}
    >
      <button
        onClick={changer}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          width: "150px",
        }}
      >
        {name}
      </button>
    </div>
  );
}
