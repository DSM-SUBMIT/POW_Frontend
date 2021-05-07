import React from "react";
import * as S from "./style";
import GreyBox from "./common/GreyBox";

const PostDeleteModal = () => {
  const modalClose = () => {
    return false;
  };
  return (
    // <modal hidde={!show}>
    <modal>
      <GreyBox onClick={modalClose}>
        <S.DelContent>
          <h4>게시글 수정 / 삭제</h4>
          <S.Button>게시글 수정</S.Button>
          <S.Button>게시글 삭제</S.Button>
        </S.DelContent>
      </GreyBox>
    </modal>
  );
};

export default PostDelete;
