import React, { useEffect, useState } from "react";
import * as s from "./Style";
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

const Club = () => {
  const [modalComponents, setModalComponents] = useState(null);
  const [profilePath, setProfilePath] = useState("");
  const [bannerPath, setBannerPath] = useState("");
  const [contents, setContents] = useState("");
  const [name, setName] = useState();
  const [projectList, setProjectList] = useState([]);
  const imgUrl = "https://ehddkfl.herokuapp.com/public/";
  // const profilePath = "DefaultImage.png";
  // const bannerPath = "DefaultImage.png";
  const {searchResult} = useParams()
  // const {id} = useParams()
  const [clubName, setClubName] = useState();

  useEffect(() => {
    clubPage(id).then((res) => {
      setClubName(res.data.name);
    }).catch((err) => {
      console.log(err);
    })
  }, [id]);

  useEffect(() => {
    clubPage(searchResult).then((res) => {
      setClubName(res.data.name);
    }).catch((err) => {
      console.log(err);
    })
  }, [searchResult]);

  useEffect(() => {
    console.log(clubName)
  }, [clubName])

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
    const {id} = useParams();
    const [data, setData] = useState();
  
    useEffect(() => {
      clubPage(id)
        .then(async (res) => {
          await setData(res.data);
          setName(res.data.name);
          setProfilePath(res.data.profilePath);
          setBannerPath(res.data.bannerPath);
          setContents(res.data.contents);
          setProjectList(res.data.introduction);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [id]);
  
    useEffect(() => {
      console.log(data);
    }, [data]);

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
        <s.BannerImg>
          <s.WhiteBox />
          <s.LogoDiv>
            <img
              alt="프로필 사진"
              src={`${data ? data.profile_path : null}`}
              onClick={onClickProfileDeleteModal}
            />
          </s.LogoDiv>
          <img
            alt="베너 사진"
            src={`${data ? data.banner_path : null}`}
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
              {projectList.reverse().map((project, i) => {
                return (
                  <s.Post
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
                    <s.PostDiv>
                      <p>작성일 : {project.created_at.substring(0, 10)}</p>
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
