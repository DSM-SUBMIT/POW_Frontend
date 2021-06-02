import React from "react";
import * as S from "../ClubModfiy/style";
import WhiteScreen from "../common/WhiteScreen";

const ClubModifyModal = (props) => {
  const onClickGreyBox = () => {
    props.setClubModifyModal(false);
  };
  return (
    <modal>
      <WhiteScreen onClick={onClickGreyBox} />
      <S.CmContent>
        <S.Title>
          <p>동아리 소개 수정</p>
        </S.Title>
        <S.WriteBox>
          <S.InputContent placeholder="내용을 입력해 주세요" />
        </S.WriteBox>
        <S.UploadButton>업로드 하기</S.UploadButton>
      </S.CmContent>
    </modal>
  );
};

export default ClubModifyModal;
