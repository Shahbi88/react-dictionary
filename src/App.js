import logo from "./logo-dictionary.png";
import "./App.css";
import Dictionary from "./dictionary";

function App() {
  return (
    <div className="App">
      {" "}
      <div>Welcome to the Dictionary App</div>
      <img src={logo} className="App-logo" alt="logo" />
      <header className="App-header">
        <Dictionary />
        <p>Test Text</p>
      </header>
    </div>
  );
}

export default App;
