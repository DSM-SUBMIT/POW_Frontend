import React from "react";
import * as S from "./Style";
import WhiteScreen from "../common/WhiteScreen";
import { FileRequest } from "../../../../axios/Axios";

const BannerDelete = ({ closeModal }) => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHViX2lkIjoxLCJpYXQiOjE2MjIwMjU3ODV9.HtxbzxBBbA3-80WE1gP8sefqRoLC2DlBaAlyAX4xdzQ";

  const onClickWhiteScreen = () => {
    closeModal(null);
  };

  const onClickCancelBtn = () => {
    closeModal(null);
  };

  const onClickBannerDelete = () => {
    try {
      FileRequest(
        "PATCH",
        "profile/1",
        {
          authorization: `Bearer ${token}`,
        },
        {}
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <WhiteScreen onClick={onClickWhiteScreen} />
      <S.DelContent>
        <S.Title>
          <p>베너사진을 초기화합니다</p>
        </S.Title>
        <S.CheckButton onClick={onClickBannerDelete}>확인</S.CheckButton>
        <S.NoButton onClick={onClickCancelBtn}>취소</S.NoButton>
      </S.DelContent>
    </>
  );
};

export default BannerDelete;
