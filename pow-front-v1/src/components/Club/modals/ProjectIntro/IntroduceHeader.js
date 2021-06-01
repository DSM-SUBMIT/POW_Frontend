import React from "react";
import * as S from "../ProjectIntro/style";

const IntroduceHeader = () => {
  return (
    <S.HeaderContent>
      <S.WriteBar>
        <S.CreatedDate>작성일 : 2021-05-07</S.CreatedDate>
        <S.ModifiedDate>수정일 : 2021-05-21</S.ModifiedDate>
      </S.WriteBar>
      <S.TitleBar>
        <S.IntroduceTitle>제목입니다.</S.IntroduceTitle>
        <S.StartDate>프로젝트 시작일 : 21-05-07 ~ 21-05-30</S.StartDate>
      </S.TitleBar>
    </S.HeaderContent>
  );
};

export default IntroduceHeader;
