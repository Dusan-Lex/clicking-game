import "./App.scss";
import { Provider } from "react-redux";
import Board from "./components/Board";

import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <h1>Clicking Game</h1>
          <Board />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
