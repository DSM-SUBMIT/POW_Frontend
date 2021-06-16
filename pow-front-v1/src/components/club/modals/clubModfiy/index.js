import React, { useState } from "react";
import * as S from "./Style";
import WhiteScreen from "../common/WhiteScreen";
import { ClubModify } from "../../../../axios/Axios";

const ClubModifyModal = ({ closeModal, clubId }) => {
  const [content, setContent] = useState("");
  const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjM4MzE3NzgsInN1YiI6IjEiLCJleHAiOjE2MjQwNDIzODIsInR5cGUiOiJhY2Nlc3NfdG9rZW4ifQ.KOc1sbOUuPGpfp5Y-3azFMXSeCwGm2rouRYnXLDj78Q`;
  const onClickGreyBox = () => {
    closeModal(null);
  };

  return (
    <>
      <WhiteScreen onClick={onClickGreyBox} />
      <S.CmContent>
        <S.Title>
          <p>동아리 소개 수정</p>
        </S.Title>
        <S.WriteBox>
          <S.InputContent
            placeholder="내용을 입력해 주세요"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </S.WriteBox>
        <S.UploadButton
          onClick={(e) => {
            ClubModify(content, clubId, token);
          }}
        >
          업로드 하기
        </S.UploadButton>
      </S.CmContent>
    </>
  );
};

export default ClubModifyModal;
