import React, { useState } from "react";

export default function Dictionary() {
  let [keyWord, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyWord}`);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          onChange={handleKeywordChange}
        ></input>
      </form>
    </div>
  );
}
//we have to define the search function within the dictionary function
