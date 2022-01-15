import "./App.scss";
import { Provider } from "react-redux";
import Board from "./components/Board";

import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Clicking Game</h1>
        <Board />
      </div>
    </Provider>
  );
}

export default App;
