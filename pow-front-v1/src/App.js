import React from "react";
import Club from "./components/Club/Club";
import Header from "./components/Header/Header"; 
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
