import React, { useState } from "react";
import axios from "axios";
export default function Dictionary() {
  let [keyWord, setKeyword] = useState("");

  function handleResponse(result) {
    console.log(result.data.meanings[0]);
  }
  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyWord}`);
    let apiKey = "d9833o0d576c1t0baaff4f33407e3baa";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
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
