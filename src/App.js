import React from 'react';
import './App.css';
import Full from "./Full";
import { Provider } from "react-redux";
import configureStore from "./configureStore"

function App() {
  return (
    <Provider store={configureStore()}>
      <div className="App">
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <Full></Full>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
