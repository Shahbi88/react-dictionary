import React, { useState } from "react";
import axios from "axios";
import Results from "./results";
import Synonyms from "./synonyms";
import "./App.css";
import Phonetics from "./phonetics";
import Example from "./example";
import Photo from "./photo";

export default function Dictionary() {
  let [keyWord, setKeyword] = useState(null);
  let [results, setResults] = useState(null); //We need to do this to send the result to the Results component at another page
  let [synonyms, setSynonyms] = useState(null);
  let [phonetics, setPhonetics] = useState(null);
  let [example, setExample] = useState(null);
  let [photo, setPhoto] = useState(null);

  function handleResponse(result) {
    console.log(result.data.meanings[0].example);
    console.log(result.data.meanings);
    console.log(result.data.phonetic);
    console.log(result.data.meanings[0].synonyms);

    setResults(result.data.meanings[0].definition); //This is how we set somethjing to use at another function
    setSynonyms(result.data.meanings[0].synonyms);
    setPhonetics(result.data.phonetic);
    setExample(result.data.meanings[0].example);
  }

  function handePhoto(response) {
    setPhoto(response.data.photos[0].src.landscape);
    console.log(response.data.photos[0].src.landscape);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for: ${keyWord}..`);

    let apiKey = "d9833o0d576c1t0baaff4f33407e3baa";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;
    let query = `${keyWord}`;
    let photoApiKey = "d9833o0d576c1t0baaff4f33407e3baa";
    let photoApiUrl = `https://api.shecodes.io/images/v1/search?query=${query}&key=${photoApiKey}`;

    axios.get(apiUrl).then(handleResponse);
    axios.get(photoApiUrl).then(handePhoto);
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
      <Synonyms synonyms={synonyms} />
      <Example example={example} />
      <Phonetics phonetics={phonetics} />
      <Photo photo={photo} />
      <br />
    </div>
  );
}
//we have to define the search function within the dictionary function
