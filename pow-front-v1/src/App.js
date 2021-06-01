import React from "react";
// import ClubModifyModal from "./components/modal/ClubModfiy/ClubModifyModal";
// import PostModifyModal from "./components/modal/PostModify/PostModifyModal";
// import PostModifyRemoveModal from "./components/modal/PostModifyRemove/PostModifyRemoveModal";
// import PostUploadModal from "./components/modal/PostUpload/PostUploadModal";
// import PostDelete from "./components/modal/PostDelete/PostDelete";
import Club from "./components/Club/Club";
import Header from "./components/Header/Header";
import Main from "./component/Main/Main";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header></Header>
      <BrowserRouter>
        <Route path="/" exact>
          <Main></Main>
        </Route>
        <Route path="/clubs" exact>
          <Club></Club>
        </Route>
      </BrowserRouter>
    </>
  );
};

export default App;
