import React from "react";
import * as S from "./Style";
import WhiteScreen from "../common/WhiteScreen";

const PostDelete = ({ closeModal }) => {

  const onClickPostDelete = () => {
    closeModal(null);
  };

  const onClickCancel = () => {
    closeModal(null);
  }

  return (
    <>
      <WhiteScreen onClick={onClickPostDelete} />
      <S.DelContent>
        <S.Title>
          <p>게시글을 삭제합니다</p>
        </S.Title>
        <S.CheckButton>확인</S.CheckButton>
        <S.NoButton onClick={onClickCancel}>취소</S.NoButton>
      </S.DelContent>
    </>
  );
};

export default PostDelete;
