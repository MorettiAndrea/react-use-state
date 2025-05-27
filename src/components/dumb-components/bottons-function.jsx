export default function ButtonFunction({ language, ifClicked, isSelected }) {
  const buttonClass = `custom-button  ${isSelected ? "selected" : ""}`;

  return (
    <button className={buttonClass} onClick={() => ifClicked(language)}>
      {language.title}
    </button>
  );
}
