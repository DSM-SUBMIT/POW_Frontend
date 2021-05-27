import React from "react";
import * as S from "../PostUpload/style";
import GreyBox from "../common/GreyBox";

const PostUploadModal = () => {
  return (
    <modal>
      <GreyBox>
        <S.UpContent>
          <S.Title>
            <p>게시물 수정</p>
          </S.Title>
          <S.UploadHeader>
            <S.InputText placeholder="제목을 입력해 주세요" />
            <S.DayBox>
              <S.StartLable>시작일 : </S.StartLable>
              <S.InputDay />
              <S.StartLable>종료일 : </S.StartLable>
              <S.InputDay />
            </S.DayBox>
          </S.UploadHeader>
          <S.WriteBox placeholder="내용을 입력해 주세요" />
          <S.UploadButton>업로드 하기</S.UploadButton>
        </S.UpContent>
      </GreyBox>
    </modal>
  );
};

export default PostUploadModal;
