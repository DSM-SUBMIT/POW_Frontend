import React from "react";
import * as S from "./style";
import WhiteScreen from "../common/WhiteScreen";
import IntroduceHeader from "./IntroduceHeader";
import { ProjectIntro } from "../../../../axios/Axios";
import { useState, useEffect } from "react";

const ProjectlntroModal = ({ closeModal, clubId, projectId }) => {
  const [contents, setContents] = useState("");
  const [writeDate, setWriteDate] = useState("");
  const [modifyDate, setModifyDate] = useState("");
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    LoadProjectIntro();
  }, []);

  const LoadProjectIntro = async () => {
    const res = await ProjectIntro(clubId, projectId);
    if (res) {
      setContents(res.data.contents);
      setTitle(res.data.title);
      setWriteDate(res.data.created_at);
      setModifyDate(res.data.updated_at);
      setStartDate(res.data.started_at);
      setEndDate(res.data.ended_at);
    }
  };

  const onClickProjectIntroModal = () => {
    closeModal(null);
  };

  return (
    <>
      <WhiteScreen onClick={onClickProjectIntroModal} />
      <S.IntroContent>
        <IntroduceHeader
          writeDate={writeDate.substring(0, 10)}
          modifyDate={modifyDate.substring(0, 10)}
          title={title}
          startDate={startDate.substring(0, 10)}
          endDate={endDate.substring(0, 10)}
        />
        <S.IntroduceBox>{contents}</S.IntroduceBox>
      </S.IntroContent>
    </>
  );
};

export default ProjectlntroModal;
