import React, { useState } from "react";
import * as S from "../PostUpload/style";
import GreyBox from "../common/GreyBox";
import "react-datepicker/dist/react-datepicker.css";

const PostUploadModal = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <modal>
      <GreyBox>
        <S.UpContent>
          <S.Title>
            <p>게시물 업로드</p>
          </S.Title>
          <S.UploadHeader>
            <S.InputText placeholder="제목을 입력해 주세요" />
            <S.DayBox>
              <S.DayLable>시작일 : </S.DayLable>
              <S.SelectDate
                selected={startDate}
                dateFormat="yyyy-MM-dd"
                onChange={(date) => setStartDate(date)}
                placeholder="클릭해 주세요."
              />
              <S.DayLable>종료일 : </S.DayLable>
              <S.SelectDate
                selected={endDate}
                dateFormat="yyyy-MM-dd"
                onChange={(date) => setEndDate(date)}
                minDate={startDate}
                placeholder="클릭해 주세요."
              />
            </S.DayBox>
          </S.UploadHeader>
          <S.WriteBox>
            <S.InputContent placeholder="내용을 입력해 주세요" />
          </S.WriteBox>
          <S.UploadButton>업로드 하기</S.UploadButton>
        </S.UpContent>
      </GreyBox>
    </modal>
  );
};

export default PostUploadModal;
