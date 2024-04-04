import React, { createContext } from "react";
import ThemeChanger from "./ThemeChanger";
const Theme1 = createContext();
const Theme2 = createContext();

export default function ThemeProvider() {
  return (
    <div>
      <Theme1.Provider value={"white"}>
        <Theme2.Provider value={"black"}>
          <ThemeChanger />
        </Theme2.Provider>
      </Theme1.Provider>
    </div>
  );
}
export { Theme1, Theme2 };
