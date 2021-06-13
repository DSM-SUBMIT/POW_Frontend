import React, { useState } from "react";
import * as s from "./Style";
import edit from "../img/edit.png";
import picture from "../img/picture.png";
import writing from "../img/writing.png";
import list from "../img/list.png";
import {
  BannerUpload,
  BannerDelete,
  ClubModifyModal,
  PictureUploadModal,
  PostModifyModal,
  PostModifyRemoveModal,
  PostUploadModal,
  ProfileDeleteModal,
  ProjectIntroModal,
} from "./modals/index";


const imgUrl = "https://ehddkfl.herokuapp.com/public/";
const profilePath = "DefaultImage.png";
const bannerPath = "1622874966523__test.jpg";

const Club = () => {
  const [modalComponents, setModalComponents] = useState(null);
  
  const onClickPictureModal = () => {
    setModalComponents(<PictureUploadModal selectModal={setModalComponents} />);
  };

  const onClickPostModifyRemoveModal = (e) => {
    e.stopPropagation();
    setModalComponents(<PostModifyRemoveModal selectModal={setModalComponents} />);
  };

  const onClickClubModifyModal = () => {
    setModalComponents(<PostModifyModal closeModal={setModalComponents} />);
  };

  const onClickPostUploadModal = () => {
    setModalComponents(<PostUploadModal closeModal={setModalComponents} />);
  };

  const onClickProjectIntro = () => {
    setModalComponents(<ProjectIntroModal closeModal={setModalComponents} />);
  };

  const onClickBannerDeleteModal = () => {
    setModalComponents(<BannerDelete closeModal={setModalComponents} />);
  };

  const onClickProfileDeleteModal = () => {
    setModalComponents(<ProfileDeleteModal closeModal={setModalComponents} />);
  };

  return (
    <>
      {modalComponents}
      <header>
        <s.BannerImg>
          <s.WhiteBox></s.WhiteBox>
          <s.LogoDiv>
            <img
              alt="프로필 사진"
              src={`${imgUrl}profiles/${profilePath}`}
              onClick={onClickProfileDeleteModal}
            />
          </s.LogoDiv>
          <img
            alt="베너 사진"
            src={`${imgUrl}banners/${bannerPath}`}
            onClick={onClickBannerDeleteModal}
          />
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
                return (
                  <s.Post key={i} onClick={onClickProjectIntro}>
                    <img
                      alt="더보기"
                      src={list}
                      onClick={onClickPostModifyRemoveModal}
                    ></img>
                    <s.PostDiv>
                      <p>작성일 : 2021-04-10</p>
                      <p>수정일 : 2021-04-11</p>
                    </s.PostDiv>
                    <s.Title>제목입니다.</s.Title>
                    <s.StartDate>
                      프로젝트 시작일 : 21-03-02 ~ 21-06-30
                    </s.StartDate>
                  </s.Post>
                );
              })}
            </s.Content>
          </s.RightContent>
        </s.MainContent>
      </section>
    </>
  );
};

export default Club;
