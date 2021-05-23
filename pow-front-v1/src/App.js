import react from "react";
// import ClubModifyModal from "./components/modal/ClubModfiy/ClubModifyModal";
// import PostModifyModal from "./components/modal/PostModify/PostModifyModal";
// import PostModifyRemoveModal from "./components/modal/PostModifyRemove/PostModifyRemoveModal";
// import PostUploadModal from "./components/modal/PostUpload/PostUploadModal";
import ProjectIntroModal from "./components/modal/ProjectIntro/ProjectIntroModal";
// import PostDelete from "./components/modal/PostDelete/PostDelete";
import React from "react";
import Club from "./components/Club/Club";
import Header from "./components/Header/Header";
import "./App.css";

const App = () => {
  return (
    <>
      <Header></Header>
      <Club></Club>
      <ProjectIntroModal />
    </>
  );
};

export default App;
