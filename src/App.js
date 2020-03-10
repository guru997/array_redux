import React from "react";
import "./App.css";
import Container from "./components/Contanier";
import { Provider } from "react-redux";
import  store  from './components/store'
 
function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <Container />
      </div>
    </Provider>
  );
}

export default App;
