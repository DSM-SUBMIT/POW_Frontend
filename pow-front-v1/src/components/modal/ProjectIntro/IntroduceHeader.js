import React from "react";
import * as S from "../ProjectIntro/style";

const IntroduceHeader = () => {
  return (
    <S.HeaderContent>
      <S.WriteBar>
        <p>작성일 : 2021-05-07</p>
        <p>수정일 : 2021-05-21</p>
        <p>작성자 : 김해교</p>
      </S.WriteBar>
      <S.TitleBar>
        <h3>제목입니다</h3>
        <p>프로젝트 시작일 : 21-05-07 ~ 21-05-30</p>
      </S.TitleBar>
    </S.HeaderContent>
  );
};

export default IntroduceHeader;
