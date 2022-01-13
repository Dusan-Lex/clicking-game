import "./App.scss";
import Board from "./components/Board";
import Info from "./components/Info";

function App() {
  return (
    <div className="App">
      <h1>Clicking Game</h1>
      <div className="container">
        <Board />
        <Info />
      </div>
    </div>
  );
}

export default App;
