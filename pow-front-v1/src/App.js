import React from "react";
import Club from "./components/Club/Club";
import Main from './components/Main/Main';
import Header from "./components/Header/Header";
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
