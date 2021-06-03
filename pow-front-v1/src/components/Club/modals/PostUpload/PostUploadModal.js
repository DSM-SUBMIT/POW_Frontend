import React, { useState } from "react";
import * as S from "../PostUpload/style";
import WhiteScreen from "../common/WhiteScreen";
import "react-datepicker/dist/react-datepicker.css";
import { PostUpload } from "../../../Axios/Axios";

const PostUploadModal = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContnet] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHViX2lkIjoxfQ.HFXowaGXnoryNVa_SbW2TtkF8KzA9ZJDfX6OnXpR9_o`;

  const onClickPostUploadModal = () => {
    props.setPostUploadModal(false);
  };

  return (
    <>
      <WhiteScreen onClick={onClickPostUploadModal} />
      <S.UpContent>
        <S.Title>
          <p>게시물 업로드</p>
        </S.Title>
        <S.UploadHeader>
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
        </S.UploadHeader>
        <S.WriteBox>
          <S.InputContent
            placeholder="내용을 입력해 주세요"
            value={content}
            onChange={(e) => {
              setContnet(e.target.value);
            }}
          />
        </S.WriteBox>
        <S.UploadButton
          onClick={(e) => {
            PostUpload(title, content, startDate, endDate, 1, token);
          }}
        >
          업로드 하기
        </S.UploadButton>
      </S.UpContent>
    </>
  );
};

export default PostUploadModal;
