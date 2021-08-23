import React from "react";
import * as s from "./Style";
import { ProfileUpload, BannerUpload } from "../index";
import picturesmall from "../../../img/picturesmall.png";

const PictureUploadModal = ({ selectModal, clubId }) => {
  const onClickWhiteScreen = () => {
    selectModal(null);
  };

  const onClickProfileUpload = () => {
    selectModal(<ProfileUpload closeModal={selectModal} clubId={clubId}/>);
  };

  const onClickBannerUpload = () => {
    selectModal(<BannerUpload closeModal={selectModal} clubId={clubId}/>);
  };

  return (
    <>
      <s.WhiteScreen onClick={onClickWhiteScreen} />
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
