import React, { useContext, useState } from "react";
import { EnglishLang, SpanishLang } from "./LanguageProvider";
import styles from "../assignment.module.css";
import { English, Spanish } from "../data";

const LanguageSwitcher = () => {
  const EnglishConverted = useContext(EnglishLang);
  const SpanishConverted = useContext(SpanishLang);

  const [language, setLanguage] = useState(EnglishConverted);
  const [name, setName] = useState(Spanish);

  const changer = () => {
    language === EnglishConverted
      ? setLanguage(SpanishConverted)
      : setLanguage(EnglishConverted);
    name === English ? setName(Spanish) : setName(English);
  };
  return (
    <div className={styles.div}>
      <h1>{language}</h1>
      <button onClick={changer} className={styles.button}>
        {name}
      </button>
    </div>
  );
};
export default LanguageSwitcher;
