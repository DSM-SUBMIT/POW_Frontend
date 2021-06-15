import React, { useEffect, useState } from "react";
import * as s from "./Style";
import { useParams } from "react-router";
import { clubPage } from "../../axios/Axios";
import edit from "../img/edit.png";
import picture from "../img/picture.png";
import writing from "../img/writing.png";
import list from "../img/list.png";
import { ClubPage } from "../../axios/Axios";
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

const Club = () => {
  const [modalComponents, setModalComponents] = useState(null);
  const [profilePath, setProfilePath] = useState("");
  const [bannerPath, setBannerPath] = useState("");
  const [contents, setContents] = useState("");
  const [projectList, setProjectList] = useState([]);
  const imgUrl = "https://ehddkfl.herokuapp.com/public/";
  // const profilePath = "DefaultImage.png";
  // const bannerPath = "DefaultImage.png";

  const {id} = useParams()
  const [clubName, setClubName] = useState();

  useEffect(() => {
    clubPage(id).then((res) => {
      setClubName(res.data.name);
    }).catch((err) => {
      console.log(err);
    })
  }, [id]);

  useEffect(() => {
    console.log(clubName)
  }, [clubName])

  useEffect(() => {
    LoadClubInfo();
  }, []);

  const LoadClubInfo = async () => {
    const res = await ClubPage(1);
    console.log(res.data);
    if (res) {
      setProfilePath(res.data.profile_path);
      setBannerPath(res.data.banner_path);
      setContents(res.data.contents);
      setProjectList(res.data.introduction);
    }
  };

  const onClickPictureModal = () => {
    setModalComponents(<PictureUploadModal selectModal={setModalComponents} />);
  };

  const onClickPostModifyRemoveModal = (e) => {
    e.stopPropagation();
    setModalComponents(
      <PostModifyRemoveModal selectModal={setModalComponents} />
    );
  };

  const onClickClubModifyModal = () => {
    setModalComponents(<ClubModifyModal closeModal={setModalComponents} />);
  };

  const onClickPostUploadModal = () => {
    setModalComponents(<PostUploadModal closeModal={setModalComponents} />);
  };

  const onClickProjectIntro = (e) => {
    setModalComponents(
      <ProjectIntroModal
        projectId={e.currentTarget.pid}
        closeModal={setModalComponents}
      />
    );
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
          <s.WhiteBox />
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
              <span>{clubName}</span>
              <s.ClubContent>{contents}</s.ClubContent>
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
              {projectList.map((project, i) => {
                return (
                  <s.Post
                    pid={project.id}
                    key={i}
                    onClick={onClickProjectIntro}
                  >
                    <img
                      alt="더보기"
                      src={list}
                      onClick={onClickPostModifyRemoveModal}
                    ></img>
                    <s.PostDiv>
                      <p>작성일 : {project.createdAt}</p>
                      {/*<p>수정일 : 2021-04-11</p>*/}
                    </s.PostDiv>
                    <s.Title>{project.title}</s.Title>
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
