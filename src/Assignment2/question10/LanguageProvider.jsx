import React, { createContext } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { inEnglish, inSpanish } from "../data";
const EnglishLang = createContext();
const SpanishLang = createContext();
const LanguageProvider = () => {
  return (
    <div>
      <EnglishLang.Provider value={inEnglish}>
        <SpanishLang.Provider value={inSpanish}>
          <LanguageSwitcher />
        </SpanishLang.Provider>
      </EnglishLang.Provider>
    </div>
  );
};
export default LanguageProvider;
export { EnglishLang, SpanishLang };
