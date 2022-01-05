const SearchResult = (props) => {
  console.log(props.items, props.selectedLang);

  if (props.items.length === 0) {
    return null;
  }

  return (
    <>
      <h2>Search Results</h2>
      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Project Name</th>
              <th scope="col">Project Language</th>
            </tr>
          </thead>
          <tbody>
            {props.items.map(
              (item) =>
                props.selectedLang.toLowerCase() ===
                  item.language.toLowerCase() && (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.language}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SearchResult;
