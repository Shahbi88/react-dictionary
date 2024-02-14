import React, { useState } from "react";
import axios from "axios";
import Results from "./results";

export default function Dictionary() {
  let [keyWord, setKeyword] = useState("");
  let [results, setResults] = useState(null); //We need to do this to send the result to the Results component at another page

  function handleResponse(result) {
    console.log(result.data.meanings[0].definition);
    setResults(result.data.meanings[0].definition); //This is how we set somethjing to use at another function
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
      <small className="results">
        {" "}
        <Results results={results} />
      </small>
    </div>
  );
}
//we have to define the search function within the dictionary function
