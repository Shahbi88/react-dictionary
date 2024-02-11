import logo from "./logo-dictionary.png";
import "./App.css";
import Dictionary from "./dictionary";
import Results from "./results";

function App() {
  return (
    <div className="App">
      {" "}
      <div>Welcome to the Dictionary App</div>
      <img src={logo} className="App-logo" alt="logo" />
      <header className="App-header">
        <Dictionary />
        <p>Edit</p>
        <Results />
      </header>
    </div>
  );
}

export default App;
