import React from "react";
import * as s from "./style";
import picturesmall from "../../../Img/picturesmall.png";

const PictureUploadModal = (props) => {
  const onClickWhiteScreen = () => {
    props.setPictureModal(false);
  };

  const onClickProfileUpload = () => {
    props.setPictureModal(false);
    props.setProfileModal(true);
  };

  const onClickBannerUpload = () => {
    props.setPictureModal(false);
    props.setBannerModal(true);
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
            <img src={picturesmall}></img>
            <span>프로필 사진</span>
          </div>
          <div onClick={onClickBannerUpload}>
            <img src={picturesmall}></img>
            <span>배너 사진</span>
          </div>
        </s.List>
      </s.Modal>
    </>
  );
};

export default PictureUploadModal;
