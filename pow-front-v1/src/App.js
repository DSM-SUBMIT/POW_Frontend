/* eslint-disable */
import React from 'react';
import Header from "./components/Header/Header";
import Main from './components/Main/Main';
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";

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
