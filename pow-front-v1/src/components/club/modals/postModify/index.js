import React, { useState } from "react";
import * as S from "./Style";
import WhiteScreen from "../common/WhiteScreen";
import "react-datepicker/dist/react-datepicker.css";
import { PostModify } from "../../../../axios/Axios";

const PostModifyModal = ({ closeModal, clubId, projectId }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjM4MzE3NzgsInN1YiI6IjEiLCJleHAiOjE2MjQwNDIzODIsInR5cGUiOiJhY2Nlc3NfdG9rZW4ifQ.KOc1sbOUuPGpfp5Y-3azFMXSeCwGm2rouRYnXLDj78Q`;

  const onClickPostModifyModal = () => {
    closeModal(null);
  };

  return (
    <>
      <WhiteScreen onClick={onClickPostModifyModal} />
      <S.ModifyContent>
        <S.Title>
          <p>게시물 수정</p>
        </S.Title>
        <S.ModifyHeader>
          <S.InputText
            placeholder="제목을 입력해 주세요"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
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
        </S.ModifyHeader>
        <S.WriteBox>
          <S.InputContent
            placeholder="내용을 입력해 주세요"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </S.WriteBox>
        <S.UploadButton
          onClick={(e) => {
            PostModify(
              title,
              content,
              startDate,
              endDate,
              clubId,
              projectId,
              token
            );
          }}
        >
          업로드 하기
        </S.UploadButton>
      </S.ModifyContent>
    </>
  );
};

export default PostModifyModal;
