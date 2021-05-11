import React from "react";
import * as S from "../PostUpload/style";
import GreyBox from "../common/GreyBox";

const PostUploadModal = () => {
  return (
    <modal>
      <GreyBox>
        <S.UpContent>
          <S.Title>
            <p>게시물 올리기</p>
          </S.Title>
          <S.InputText placeholder="제목을 입력해 주세요" />
          <S.DayBox>
            <S.StartLable>시작일 : </S.StartLable>
            <S.InputDay />
            <S.StartLable>종료일 : </S.StartLable>
            <S.InputDay />
          </S.DayBox>
          <div>
            <S.FileLabel for="file">파일 선택</S.FileLabel>
            <S.FileInput type="file" id="file" />
            <S.Uploadname placeholder="파일 선택" />
          </div>
          <S.UploadButton>업로드 하기</S.UploadButton>
        </S.UpContent>
      </GreyBox>
    </modal>
  );
};

export default PostUploadModal;
