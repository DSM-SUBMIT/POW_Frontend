/* eslint-disable */
import React from 'react';
import Header from "./components/Header/Header";
import Main from './components/Main/Main';
import AccountDel from './components/Modal/AccountDel';
import { Route, BrowserRouter } from "react-router-dom";
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
