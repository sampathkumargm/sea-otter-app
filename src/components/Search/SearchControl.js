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

    if (languageRef.current.selectedIndex === 0) {
      console.log("Please select a language.");
      return;
    }

    fetch(
      `https://api.github.com/search/repositories?q=${enteredProjectName}&language=${selectedLanguage}`
    )
      .then((response) => response.json())
      .then((data) => props.searchProjects(data.items));

    props.lang(selectedLanguage);
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
          <label>Select a language:</label>
          <select className="form-select" required ref={languageRef}>
            <option>Choose...</option>
            <option>JavaScript</option>
            <option>Python</option>
            <option>Java</option>
            <option>PHP</option>
          </select>
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchControl;
