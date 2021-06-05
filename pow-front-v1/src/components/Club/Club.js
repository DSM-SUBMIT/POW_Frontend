import React, { useState } from 'react';
import * as s from './style';
import edit from '../IMG/edit.png';
import picture from '../IMG/picture.png';
import writing from '../IMG/writing.png';
import list from '../IMG/list.png';
import PictureUploadModal from "./modals/pictureUploadModal/PictureUploadModal";
import ProfileUpload from "./modals/ProfileUpload/ProfileUpload";
import BannerUpload from "./modals/BannerUpload/BannerUpload";
import PostModifyModal from "../Club/modals/PostModify/PostModifyModal";
import PostModifyRemoveModal from "../Club/modals/PostModifyRemove/PostModifyRemoveModal";
import PostUploadModal from "../Club/modals/PostUpload/PostUploadModal";
import PostDeleteModal from "../Club/modals/PostDelete/PostDelete";
import ProjectIntroModal from "../Club/modals/ProjectIntro/ProjectIntroModal";
import ClubModifyModal from "../Club/modals/ClubModfiy/ClubModifyModal";
import BannerDelete from './modals/bannerDelete/BannerDelete';
import ProfileDeleteModal from './modals/profileDeleteModal/ProfileDeleteModal';

const Club = () => {
  const [pictureModal, setPictureModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const [bannerModal, setBannerModal] = useState(false);
  const [postModifyModal, setPostModifyModal] = useState(false);
  const [postModifyRemoveModal, setPostModifyRemoveModal] = useState(false);
  const [postUploadModal, setPostUploadModal] = useState(false);
  const [postDeleteModal, setPostDeleteModal] = useState(false);
  const [projectIntroModal, setProjectIntroModal] = useState(false);
  const [clubModifyModal, setClubModifyModal] = useState(false);
  const [bannerDeleteModal, setBannerDeleteModal] = useState(false);
  const [profileDeleteModal, setProfileDeleteModal] = useState(false);

  const imgUrl = 'https://ehddkfl.herokuapp.com/public/';
  const profilePath = 'DefaultImage.png';
  const bannerPath = 'DefaultImage.png';
  

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

  const onClickBannerDeleteModal = () => {
    setBannerDeleteModal(true);
  }

  const onClickProfileDeleteModal = () => {
    setProfileDeleteModal(true);
  }

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
        <PostModifyModal setPostModifyModal={setPostModifyRemoveModal} />
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

      {bannerDeleteModal && (
        <BannerDelete setBannerDeleteModal={setBannerDeleteModal}/>
      )}

      {profileDeleteModal && (
        <ProfileDeleteModal setProfileDeleteModal={setProfileDeleteModal}/>
      )}

      <header>
        <s.BannerImg>
            <s.WhiteBox></s.WhiteBox>
            <s.LogoDiv>
                <img alt="프로필 사진" src={`${imgUrl}profiles/${profilePath}`}
                onClick = {onClickProfileDeleteModal} />
            </s.LogoDiv>
            <img alt="베너 사진" src={`${imgUrl}banners/${bannerPath}`}
            onClick={onClickBannerDeleteModal}/>
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
                <img alt="아이콘" src={picture}></img>
                <span>사진 업로드</span>
              </s.PictureUpload>
              <s.ClubFix onClick={onClickClubModifyModal}>
                <img alt="아이콘" src={edit}></img>
                <span>동아리 소개 수정</span>
              </s.ClubFix>
              <s.PostUpload onClick={onClickPostUploadModal}>
                <img alt="아이콘" src={writing}></img>
                <span>게시물 업로드</span>
              </s.PostUpload>
            </s.Upload>
            <s.Content>
              {[...Array(5)].map((v, i) => {
                return(
                  <s.Post key={i} onClick={onClickProjectIntro}>
                    <img alt="더보기" src={list} onClick={onClickPostModifyRemoveModal}></img>
                    <s.PostDiv>
                      <p>작성일 : 2021-04-10</p>
                      <p>수정일 : 2021-04-11</p>
                    </s.PostDiv>
                    <s.Title>제목입니다.</s.Title>
                    <s.StartDate>프로젝트 시작일 : 21-03-02 ~ 21-06-30</s.StartDate>
                  </s.Post>
                );})}
            </s.Content>
          </s.RightContent>
        </s.MainContent>
      </section>
    </>
  );
};

export default Club;
