import React from "react";
import * as S from "./style";
import GreyBox from "./common/GreyBox";

const ClubModifyModal = () => {
  return (
    <modal>
      <GreyBox>
        <S.CmContent>
          <h4>동아리 소개 수정</h4>
          <S.InputText placeholder="작성자를 입력해 주세요" />
          <div>
            <S.FileLabel for="file">파일 선택</S.FileLabel>
            <S.FileInput type="file" id="file" />
            <S.Uploadname placeholder="파일 선택"></S.Uploadname>
          </div>
          <S.UploadButton>업로드 하기</S.UploadButton>
        </S.CmContent>
      </GreyBox>
    </modal>
  );
};

export default ClubModifyModal;
