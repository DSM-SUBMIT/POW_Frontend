import React, { useState } from "react";
import * as S from "./Style";
import WhiteScreen from "../common/WhiteScreen";
import { ClubModify } from "../../../../axios/Axios";

const ClubModifyModal = ({ selectModal }) => {
  const [content, setContent] = useState("");
  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHViX2lkIjoxfQ.HFXowaGXnoryNVa_SbW2TtkF8KzA9ZJDfX6OnXpR9_o`;
  const onClickGreyBox = () => {
    selectModal(null);
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
            ClubModify(content, 1, token);
          }}
        >
          업로드 하기
        </S.UploadButton>
      </S.CmContent>
    </>
  );
};

export default ClubModifyModal;
