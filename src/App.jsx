// layout
import ButtonsLayout from "./components/layout/Main";

// data
import languages from "./components/data/languages";

export default function App() {
  return (
    <>
      <ButtonsLayout languages={languages} />
    </>
  );
}
