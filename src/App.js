import { useState } from "react";
import SearchControl from "./components/Search/SearchControl";
import SearchResult from "./components/Search/SearchResult";

const App = () => {
  const [result, setResult] = useState([]);
  const [language, setLanguage] = useState("");

  const searchProjectsHandler = (projects) => {
    setResult([...projects]);
    // setResult((prevProjects) => [...prevProjects, ...projects]);
  };

  const languageHandler = (selectedLang) => {
    setLanguage(selectedLang);
  };

  return (
    <div className="container">
      <SearchControl
        searchProjects={searchProjectsHandler}
        lang={languageHandler}
      />
      <SearchResult items={result} selectedLang={language} />
    </div>
  );
};

export default App;
