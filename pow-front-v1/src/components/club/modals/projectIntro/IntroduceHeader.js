import React from "react";
import * as S from "./style";

const IntroduceHeader = ({
  writeDate,
  modifyDate,
  title,
  startDate,
  endDate,
}) => {
  return (
    <S.HeaderContent>
      <S.WriteBar>
        <S.CreatedDate>작성일 : {writeDate}</S.CreatedDate>
        <S.ModifiedDate>수정일 : {modifyDate}</S.ModifiedDate>
      </S.WriteBar>
      <S.TitleBar>
        <S.IntroduceTitle>{title}</S.IntroduceTitle>
        <S.StartDate>
          프로젝트 시작일 : {startDate} ~ {endDate}
        </S.StartDate>
      </S.TitleBar>
    </S.HeaderContent>
  );
};

export default IntroduceHeader;
