import React, { useContext, useState } from "react";
import { English, Spanish } from "./LanguageProvider";
export default function LanguageSwitcher() {
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "larger",
      }}
    >
      <h1>{language}</h1>
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
