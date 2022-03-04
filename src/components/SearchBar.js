import React from "react";

function SearchBar(props) {
  const handleChange = (e) => {
    props.changeParameter("title", e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      name="searchBar"
      className="searchbar"
    >
      <input
        autoComplete="off"
        type="text"
        name="searchTerm"
        placeholder="Enter Book Name"
        className="searchterm"
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchBar;
