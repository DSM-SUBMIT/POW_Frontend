import React, { useState } from "react";
import * as S from "./Style";
import WhiteScreen from "../common/WhiteScreen";
import "react-datepicker/dist/react-datepicker.css";
import { PostModify } from "../../../../axios/Axios";

const PostModifyModal = ({ closeModal }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const token = localStorage.getItem("token");

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
            PostModify(title, content, startDate, endDate, 1, 1, token);
          }}
        >
          업로드 하기
        </S.UploadButton>
      </S.ModifyContent>
    </>
  );
};

export default PostModifyModal;
