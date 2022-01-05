const SearchResult = (props) => {
  return (
    <>
      <h2>Search Results (found {props.items.length} projects)</h2>
      <div className="card">
        <table className="table mb-0">
          <thead>
            <tr>
              <th scope="col">Project Name</th>
              <th scope="col">Project Language</th>
            </tr>
          </thead>
          <tbody>
            {props.items.map((item) => (
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
