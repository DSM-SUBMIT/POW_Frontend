import React from "react";
import Club from "./components/club/Club";
import Header from "./components/header/Header";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header></Header>
      <Club></Club>
    </>
  );
};

export default App;
