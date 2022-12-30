import React, { useState } from "react";

export default function Search(props) {
  const { searchHandler } = props;
//   console.log(props);

  const [query, setQuery] = useState("");
  return (
    <>
      <form
        className="d-flex"
        onSubmit={(e) => {
          e.preventDefault();
          searchHandler(query);
        }}
        role="search"
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </>
  );
}
