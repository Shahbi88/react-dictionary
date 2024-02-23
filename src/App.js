import logo from "./logo-dictionary.png";
import "./App.css";
import Dictionary from "./dictionary";

function App() {
  return (
    <div className="App">
      {" "}
      <div className="welcome">Welcome to the Dictionary App</div>
      <img src={logo} className="App-logo" alt="logo" />
      <header className="App-header">
        <div>
          {" "}
          <strong>The definition of..</strong>
          <Dictionary />
        </div>
        <p>Test Text from App.JS page</p>
      </header>
    </div>
  );
}

export default App;
