import { useSelector } from "react-redux";

const projectSelector = (state) => state.projects;

const SearchResult = () => {
  const projects = useSelector(projectSelector);

  if (projects.length === 0) {
    return <h2>{projects.length} projects found.</h2>;
  }

  return (
    <>
      <h2>Search Results (found {projects.length} projects)</h2>
      <div className="card">
        <table className="table mb-0">
          <thead>
            <tr>
              <th scope="col">Project Name</th>
              <th scope="col">Project Language</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.language}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SearchResult;
