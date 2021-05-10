import React from "react";
import * as S from "../PostModify/style";
import GreyBox from "../common/GreyBox";

const PostModifyModal = () => {
  return (
    <modal>
      <GreyBox>
        <S.ModifyContent>
          <h4>게시물 수정</h4>
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
        </S.ModifyContent>
      </GreyBox>
    </modal>
  );
};

export default PostModifyModal;
