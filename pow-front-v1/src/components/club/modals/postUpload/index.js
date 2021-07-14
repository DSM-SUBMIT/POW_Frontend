import React, { useState } from "react";
import * as S from "./Style";
import WhiteScreen from "../common/WhiteScreen";
import "react-datepicker/dist/react-datepicker.css";
import { PostCRUD } from "../../../../axios/Axios";
import Spinner from "../common/Spinner";

const PostUploadModal = ({ closeModal, clubId }) => {
  const [title, setTitle] = useState("");
  const [content, setContnet] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const onClickPostUploadModal = () => {
    closeModal(null);
  };

  const onClickPostUpload = () => {
    setLoading(true);
    PostCRUD(
      "POST",
      `club/${clubId}/project`,
      {
        title: title,
        contents: content,
        started_at: startDate,
        ended_at: endDate,
        club_id: clubId,
      },
      { Authorizatoin: `Bearer ${token}` }
    )
      .then((response) => {
        setLoading(false);
        alert("게시글이 업로드 되었습니다.");
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        alert("문제가 발생했습니다.");
        console.log(error);
      });
  };

  return (
    <>
      <WhiteScreen onClick={onClickPostUploadModal} />
      <S.UpContent>
        <S.Title>
          <p>게시물 업로드</p>
        </S.Title>
        {loading ? (
          <Spinner />
        ) : (
          <>
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
                onClickPostUpload(
                  title,
                  content,
                  startDate,
                  endDate,
                  parseInt(clubId, 10),
                  token
                );
              }}
            >
              업로드 하기
            </S.UploadButton>
          </>
        )}
      </S.UpContent>
    </>
  );
};

export default PostUploadModal;
