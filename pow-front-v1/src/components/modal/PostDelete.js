import React from "react";
import * as S from "./style";
import GreyBox from "./common/GreyBox";

const PostDelete = () => {
  const modalClose = () => {
    return false;
  };
  return (
    <modal>
      <GreyBox onClick={modalClose}>
        <S.DelContent>
          <h4>게시글을 삭제합니다</h4>
          <S.CheckButton>확인</S.CheckButton>
          <S.NoButton>취소</S.NoButton>
        </S.DelContent>
      </GreyBox>
    </modal>
  );
};

export default PostDelete;
