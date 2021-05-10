import React from "react";
import * as S from "../ProjectIntro/style";
import GreyBox from "../common/GreyBox";

const ProjectlntroModal = () => {
  return (
    <modal>
      <GreyBox>
        <S.DelContent>
          <h4>게시글 수정 / 삭제</h4>
          <S.Button>게시글 수정</S.Button>
          <S.Button>게시글 삭제</S.Button>
        </S.DelContent>
      </GreyBox>
    </modal>
  );
};

export default ProjectlntroModal;
