import "./Search.css";
import { useState } from "react";
import { Redirect } from "react-router-dom";

const Search = (props) => {
  const [search, setSearch] = useState("");
  const [firstSearch, setFirstSearch] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFirstSearch(!firstSearch);
  };

  console.log("first toggle status", firstSearch);

  if (firstSearch) {
    return <Redirect to={`/detail/${search}`} />;
  }
  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Stock"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="search-button">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Search;
