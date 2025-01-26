import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by Annie Nelson and is open-sourced on {""}
          <a
            href="https://github.com/Annie15N/react-project-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          {""} and is hosted on {""}
          <a
            href="https://gorgeous-paprenjak-1743ac.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
