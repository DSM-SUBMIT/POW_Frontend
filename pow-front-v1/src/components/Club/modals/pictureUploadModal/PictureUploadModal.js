import React from "react";
import * as s from "./style";
import picturesmall from "../../../IMG/picturesmall.png";

const PictureUploadModal = ({setPictureModal, setProfileModal, setBannerModal}) => {
  const onClickWhiteScreen = () => {
    setPictureModal(false);
  };

  const onClickProfileUpload = () => {
    setPictureModal(false);
    setProfileModal(true);
  };

  const onClickBannerUpload = () => {
    setPictureModal(false);
    setBannerModal(true);
  };

  return (
    <>
      <s.WhiteScreen onClick={onClickWhiteScreen}></s.WhiteScreen>
      <s.Modal>
        <s.Title>
          <p>사진 업로드</p>
        </s.Title>
        <s.List>
          <div onClick={onClickProfileUpload}>
            <img alt="프로필 수정 아이콘" src={picturesmall}></img>
            <span>프로필 사진</span>
          </div>
          <div onClick={onClickBannerUpload}>
            <img alt="배너 수정 아이콘" src={picturesmall}></img>
            <span>배너 사진</span>
          </div>
        </s.List>
      </s.Modal>
    </>
  );
};

export default PictureUploadModal;
