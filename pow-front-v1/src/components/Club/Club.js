import React, { useEffect, useState } from "react";
import * as s from "./style";
import logo from "../Img/logo.png";
import edit from "../Img/edit.png";
import picture from "../Img/picture.png";
import writing from "../Img/writing.png";
import list from "../Img/list.png";
import PictureUploadModal from "./modals/pictureUploadModal/PictureUploadModal";
import ProfileUpload from "./modals/ProfileUpload/ProfileUpload";
import BannerUpload from "./modals/BannerUpload/BannerUpload";
import PostModifyModal from "../Club/modals/PostModify/PostModifyModal";
import PostModifyRemoveModal from "../Club/modals/PostModifyRemove/PostModifyRemoveModal";
import PostUploadModal from "../Club/modals/PostUpload/PostUploadModal";
import PostDeleteModal from "../Club/modals/PostDelete/PostDelete";
import ProjectIntroModal from "../Club/modals/ProjectIntro/ProjectIntroModal";
import ClubModifyModal from "../Club/modals/ClubModfiy/ClubModifyModal";
import { FileRequest } from "../Axios/Axios";

const Club = () => {
  const [pictureModal, setPictureModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const [bannerModal, setBannerModal] = useState(false);
  const imgUrl = "https://ehddkfl.herokuapp.com/public/";
  let profilePath = "DefaultImage.png";
  let bannerPath = "DefaultImage.png";
  const [postModifyModal, setPostModifyModal] = useState(false);
  const [postModifyRemoveModal, setPostModifyRemoveModal] = useState(false);
  const [postUploadModal, setPostUploadModal] = useState(false);
  const [postDeleteModal, setPostDeleteModal] = useState(false);
  const [projectIntroModal, setProjectIntroModal] = useState(false);
  const [clubModifyModal, setClubModifyModal] = useState(false);

  const onClickPictureModal = () => {
    setPictureModal(true);
  };

  const onClickPostModifyRemoveModal = (e) => {
    e.stopPropagation();
    setPostModifyRemoveModal(true);
  };

  const onClickClubModifyModal = () => {
    setClubModifyModal(true);
  };

  const onClickPostUploadModal = () => {
    setPostUploadModal(true);
  };

  const onClickProjectIntro = () => {
    setProjectIntroModal(true);
  };

  return (
    <>
      {pictureModal && (
        <PictureUploadModal
          setPictureModal={setPictureModal}
          setProfileModal={setProfileModal}
          setBannerModal={setBannerModal}
        ></PictureUploadModal>
      )}

      {profileModal && (
        <ProfileUpload setProfileModal={setProfileModal}></ProfileUpload>
      )}

      {bannerModal && (
        <BannerUpload setBannerModal={setBannerModal}></BannerUpload>
      )}

      {postModifyRemoveModal && (
        <PostModifyRemoveModal
          setPostModifyRemoveModal={setPostModifyRemoveModal}
          setPostModifyModal={setPostModifyModal}
          setPostDeleteModal={setPostDeleteModal}
        />
      )}

      {postModifyModal && (
        <PostModifyModal setPostModifyModal={setPostModifyModal} />
      )}

      {postUploadModal && (
        <PostUploadModal setPostUploadModal={setPostUploadModal} />
      )}

      {clubModifyModal && (
        <ClubModifyModal setClubModifyModal={setClubModifyModal} />
      )}

      {postDeleteModal && (
        <PostDeleteModal setPostDeleteModal={setPostDeleteModal} />
      )}

      {projectIntroModal && (
        <ProjectIntroModal setProjectIntroModal={setProjectIntroModal} />
      )}

      <header>
        <s.BannerImg>
          <s.WhiteBox></s.WhiteBox>
          <s.LogoDiv>
            <img
              alt="프로필 사진"
              src={`${imgUrl}profiles/${profilePath}`}
            ></img>
          </s.LogoDiv>
          <img alt="베너 사진" src={`${imgUrl}banners/${bannerPath}`}></img>
        </s.BannerImg>
      </header>
      <section style={{ backgroundColor: "#FCFCFC" }}>
        <s.MainContent>
          <s.LeftContent>
            <s.ClubIntroBox>
              <span>Submit</span>
              <s.FixDate>수정일 : 2021-05-07</s.FixDate>
            </s.ClubIntroBox>
          </s.LeftContent>
          <s.RightContent>
            <s.Upload>
              <s.PictureUpload onClick={onClickPictureModal}>
                <img src={picture}></img>
                <span>사진 업로드</span>
              </s.PictureUpload>
              <s.ClubFix onClick={onClickClubModifyModal}>
                <img src={edit}></img>
                <span>동아리 소개 수정</span>
              </s.ClubFix>
              <s.PostUpload onClick={onClickPostUploadModal}>
                <img src={writing}></img>
                <span>게시물 업로드</span>
              </s.PostUpload>
            </s.Upload>
            <s.Content>
              <s.Post onClick={onClickProjectIntro}>
                <img src={list} onClick={onClickPostModifyRemoveModal}></img>
                <s.PostDiv>
                  <p>작성일 : 2021-04-10</p>
                  <p>수정일 : 2021-04-11</p>
                </s.PostDiv>
                <s.Title>제목입니다.</s.Title>
                <s.StartDate>프로젝트 시작일 : 21-03-02 ~ 21-06-30</s.StartDate>
              </s.Post>
              <s.Post>
                <img src={list}></img>
                <s.PostDiv>
                  <p>작성일 : 2021-04-10</p>
                  <p>수정일 : 2021-04-11</p>
                </s.PostDiv>
                <s.Title>제목입니다.</s.Title>
                <s.StartDate>프로젝트 시작일 : 21-03-02 ~ 21-06-30</s.StartDate>
              </s.Post>
              <s.Post>
                <img src={list}></img>
                <s.PostDiv>
                  <p>작성일 : 2021-04-10</p>
                  <p>수정일 : 2021-04-11</p>
                </s.PostDiv>
                <s.Title>제목입니다.</s.Title>
                <s.StartDate>프로젝트 시작일 : 21-03-02 ~ 21-06-30</s.StartDate>
              </s.Post>
              <s.Post>
                <img src={list}></img>
                <s.PostDiv>
                  <p>작성일 : 2021-04-10</p>
                  <p>수정일 : 2021-04-11</p>
                </s.PostDiv>
                <s.Title>제목입니다.</s.Title>
                <s.StartDate>프로젝트 시작일 : 21-03-02 ~ 21-06-30</s.StartDate>
              </s.Post>
            </s.Content>
          </s.RightContent>
        </s.MainContent>
      </section>
    </>
  );
};

export default Club;
