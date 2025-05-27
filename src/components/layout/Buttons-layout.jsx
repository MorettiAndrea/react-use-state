import { useState } from "react";
import ButtonFunction from "../dumb-components/bottons-function";

export default function ButtonsLayout({ languages }) {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const handleButtonClick = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <main>
      <h1>Learn Web Development</h1>
      <div className="custom-container">
        <section className="btns-row">
          {languages.map((language) => (
            <ButtonFunction key={language.id} language={language} ifClicked={handleButtonClick} isSelected={selectedLanguage.id === language.id} />
          ))}
        </section>
        <section className="card">
          <h3 className="card-title">{selectedLanguage.title}</h3>
          <p className="card-text">{selectedLanguage.description}</p>
        </section>
      </div>
    </main>
  );
}
