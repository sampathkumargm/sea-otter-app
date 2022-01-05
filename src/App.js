import { useState } from "react";
import SearchControl from "./components/Search/SearchControl";
import SearchResult from "./components/Search/SearchResult";

const App = () => {
  const [result, setResult] = useState([]);

  const searchProjectsHandler = (projects) => {
    setResult([...projects]);
  };

  return (
    <div className="container">
      <SearchControl searchProjects={searchProjectsHandler} />
      {result.length !== 0 && <SearchResult items={result} />}
    </div>
  );
};

export default App;
