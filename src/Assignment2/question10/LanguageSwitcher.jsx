import React, { useContext, useState } from "react";
import { English, Spanish } from "./LanguageProvider";
import styles from "../assignment.module.css";
const LanguageSwitcher = () => {
  const EnglishConverted = useContext(English);
  const SpanishConverted = useContext(Spanish);

  const [language, setLanguage] = useState(EnglishConverted);
  const [name, setName] = useState("Spanish");

  const changer = () => {
    language === EnglishConverted
      ? setLanguage(SpanishConverted)
      : setLanguage(EnglishConverted);
    name === "English" ? setName("Spanish") : setName("English");
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
