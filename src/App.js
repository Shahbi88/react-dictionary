import logo from "./logo-dictionary.png";
import "./App.css";
import Dictionary from "./dictionary";

function App() {
  return (
    <div className="App">
      {" "}
      <div className="welcome">
        Welcome to the Dictionary App!{" "}
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <header className="App-header">
        <div>
          {" "}
          <strong>The definition of..</strong>
          <Dictionary />
        </div>
        <small>
          <p className="footer">
            Coded by <a href="https://www.rihabazar.co.uk/">Rihab Azar</a> , is
            open-sourced on{" "}
            <a href="https://github.com/Shahbi88/react-dictionary">Github</a>{" "}
            and hosted on{" "}
            <a href="https://sunny-belekoy-ac520e.netlify.app/">Netlify</a>
          </p>
        </small>
      </header>
    </div>
  );
}

export default App;
