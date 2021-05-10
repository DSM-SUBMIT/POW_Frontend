import React from "react";
import * as S from "../PostDelete/style";
import GreyBox from "../common/GreyBox";

const PostDelete = () => {
  return (
    <modal>
      <GreyBox>
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
