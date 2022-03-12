import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Notes for the lesson creator Siraj Rival:<br/>
          1) Please update https://github.com/Polygon-Academy/starter-kits/blob/main/README.md<br/>
          "npx create-react-app YOUR_PROJECT_NAME --template polygon-starter-kit" should be "npx create-react-app YOUR_PROJECT_NAME"<br/>
          "npm run start" should be "yarn start"<br/>
          <br/>
          2) https://academy.polygon.technology/module-2-apprentice-challenge/dapp-starter-kit notes to change index.html<br/>
          after running the project, it notes to modify App.js<br/>
          Which is it? <br/>
          <br/>
          3) No notes on how to submit. Git pull request? New git project?<br/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          I can look at react.js later
        </a>
      </header>
    </div>
  );
}

export default App;
