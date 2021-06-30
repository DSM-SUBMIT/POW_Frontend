import React, { useEffect, useState } from "react";
import * as S from "./Style";
import { useParams } from "react-router";
import { clubPage } from "../../axios/Axios";
import edit from "../img/edit.png";
import picture from "../img/picture.png";
import writing from "../img/writing.png";
import list from "../img/list.png";
import Header from "../header/Header";
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

const DEFAULTIMG =
  "https://pow-bucket.s3.ap-northeast-2.amazonaws.com/1624976379907__asdsad.jpg";

const Club = () => {
  const [modalComponents, setModalComponents] = useState(null);
  const [profilePath, setProfilePath] = useState(null);
  const [bannerPath, setBannerPath] = useState(null);
  const [contents, setContents] = useState("");
  const [projectList, setProjectList] = useState([]);
  const { searchResult } = useParams();
  const { id } = useParams();
  const [clubName, setClubName] = useState();


  useEffect(() => {
    clubPage(id)
      .then((res) => {
        setClubName(res.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    clubPage(searchResult)
      .then((res) => {
        setClubName(res.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchResult]);

  useEffect(() => {
    console.log(clubName);
  }, [clubName]);

  useEffect(() => {
    LoadClubInfo();
  }, []);

  const LoadClubInfo = async () => {
    const res = await clubPage(id);
    // console.log(res.data);
    if (res) {
      setProfilePath(res.data.profile_path);
      setBannerPath(res.data.banner_path);
      setContents(res.data.contents);
      setProjectList(res.data.introduction);
    }
  };
  // const {id} = useParams();
  // const [data, setData] = useState();

  // useEffect(() => {
  //   clubPage(id)
  //     .then(async (res) => {
  //       await setData(res.data);
  //       setName(res.data.name);
  //       setProfilePath(res.data.profilePath);
  //       setBannerPath(res.data.bannerPath);
  //       setContents(res.data.contents);
  //       setProjectList(res.data.introduction);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [id]);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  const onClickPictureModal = () => {
    setModalComponents(
      <PictureUploadModal selectModal={setModalComponents} clubId={id} />
    );
  };

  const onClickPostModifyRemoveModal = (e, projectId) => {
    e.stopPropagation();
    setModalComponents(
      <PostModifyRemoveModal
        clubId={id}
        projectId={projectId}
        selectModal={setModalComponents}
      />
    );
  };

  const onClickClubModifyModal = () => {
    setModalComponents(
      <ClubModifyModal clubId={id} closeModal={setModalComponents} />
    );
  };

  const onClickPostUploadModal = () => {
    setModalComponents(
      <PostUploadModal clubId={id} closeModal={setModalComponents} />
    );
  };

  const onClickProjectIntro = (projectId) => {
    setModalComponents(
      <ProjectIntroModal
        clubId={id}
        projectId={projectId}
        closeModal={setModalComponents}
      />
    );
  };

  const onClickBannerDeleteModal = () => {
    setModalComponents(
      <BannerDelete closeModal={setModalComponents} clubId={id} />
    );
  };

  const onClickProfileDeleteModal = () => {
    setModalComponents(
      <ProfileDeleteModal closeModal={setModalComponents} clubId={id} />
    );
  };

  return (
    <>
      <Header />
      {modalComponents}
      <header>
        <S.BannerImg>
          <S.LogoDiv>
            <S.WhiteBox />
            <div>
              <img
                  alt="프로필 사진"
                  src={`${profilePath ? profilePath : DEFAULTIMG}`}
                  onClick={onClickProfileDeleteModal}
                />
            </div>
          </S.LogoDiv>
          <img
            alt="베너 사진"
            src={`${bannerPath ? bannerPath : DEFAULTIMG}`}
            onClick={onClickBannerDeleteModal}
          />
        </S.BannerImg>
      </header>
      <section style={{ backgroundColor: "#FCFCFC" }}>
        <S.MainContent>
          <S.LeftContent>
            <S.ClubIntroBox>
              <span>{clubName}</span>
              <S.ClubContent>{contents}</S.ClubContent>
            </S.ClubIntroBox>
          </S.LeftContent>
          <S.RightContent>
            <S.Upload>
              <S.PictureUpload onClick={onClickPictureModal}>
                <img alt="아이콘" src={picture}></img>
                <span>사진 업로드</span>
              </S.PictureUpload>
              <S.ClubFix onClick={onClickClubModifyModal}>
                <img alt="아이콘" src={edit}></img>
                <span>동아리 소개 수정</span>
              </S.ClubFix>
              <S.PostUpload onClick={onClickPostUploadModal}>
                <img alt="아이콘" src={writing}></img>
                <span>게시물 업로드</span>
              </S.PostUpload>
            </S.Upload>
            <S.Content>
              {projectList.reverse().map((project, i) => {
                return (
                  <S.Post
                    key={i}
                    onClick={() => onClickProjectIntro(project.id)}
                  >
                    <img
                      alt="더보기"
                      src={list}
                      onClick={(e) =>
                        onClickPostModifyRemoveModal(e, project.id)
                      }
                    ></img>
                    <S.PostDiv>
                      <p>작성일 : {project.created_at.substring(0, 10)}</p>
                    </S.PostDiv>
                    <S.Title>{project.title}</S.Title>
                  </S.Post>
                );
              })}
            </S.Content>
          </S.RightContent>
        </S.MainContent>
      </section>
    </>
  );
};

export default Club;
