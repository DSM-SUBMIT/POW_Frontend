import React from "react";
import Club from "./components/Club/Club";
import Header from "./components/Header/Header";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return(
    <>
      <BrowserRouter>
        <Route path="/" exact>
          <Header></Header>
          <Main></Main>
        </Route>
      </BrowserRouter>
    </>
  )
}

export default App;
