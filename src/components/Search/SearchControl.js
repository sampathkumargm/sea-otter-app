import { useRef } from "react";

const SearchControl = (props) => {
  const projectNameRef = useRef();
  const languageRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredProjectName = projectNameRef.current.value;
    const selectedLanguage = languageRef.current.value;

    if (enteredProjectName.trim().length === 0) {
      console.log("Please enter a project name.");
      return;
    }

    if (selectedLanguage.trim().length === 0) {
      console.log("Please select a language.");
      return;
    }

    fetch(
      `https://api.github.com/search/repositories?q=${enteredProjectName}+language:${selectedLanguage}`
    )
      .then((response) => response.json())
      .then((data) => {
        const filteredProjects = data.items
          .filter((project) => project.name.includes(enteredProjectName))
          .filter(
            (project) => project.language.toLowerCase() === selectedLanguage
          );

        props.searchProjects(filteredProjects);
      });
  };

  return (
    <>
      <h2>Search Form</h2>
      <form className="row mb-5" onSubmit={onSubmitHandler}>
        <div className="col-12 mb-3">
          <label className="form-label">Enter a project name:</label>
          <input
            className="form-control"
            type="text"
            placeholder="tetris"
            required
            ref={projectNameRef}
          />
        </div>
        <div className="col mb-3">
          <label>Select a programming language:</label>
          <select className="form-select" required ref={languageRef}>
            <option value="">Choose...</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="php">PHP</option>
          </select>
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Search Projects
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchControl;
