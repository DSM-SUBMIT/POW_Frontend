import React, { useState } from "react";
import * as S from "./Style";
import WhiteScreen from "../common/WhiteScreen";
import { ClubModify } from "../../../../axios/Axios";
import Spinner from "../common/Spinner";

const ClubModifyModal = ({ closeModal, clubId }) => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
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
