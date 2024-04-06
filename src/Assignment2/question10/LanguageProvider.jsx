import React, { createContext } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
const English = createContext();
const Spanish = createContext();
const LanguageProvider = () => {
  return (
    <div>
      <English.Provider
        value={
          "Hello Welcome to the world of React js where i am using useContext Hook"
        }
      >
        <Spanish.Provider
          value={
            "Hola, bienvenido al mundo de React js donde estoy usando useContext Hook"
          }
        >
          <LanguageSwitcher />
        </Spanish.Provider>
      </English.Provider>
    </div>
  );
};
export default LanguageProvider;
export { English, Spanish };
