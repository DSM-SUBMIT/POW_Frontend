import React from "react";
import Club from "./components/club/Club";
import Main from './components/main/Main';
import Header from "./components/header/Header";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return(
    <>
      <BrowserRouter>
        <Route path="/" exact>
          <Header />
          <Main />
        </Route>
        <Route exact path="/club">
          <Club />
        </Route>
      </BrowserRouter>
    </>
  )
}

export default App;
