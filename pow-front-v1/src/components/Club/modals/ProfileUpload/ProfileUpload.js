import React, { useState } from "react";
import { FileRequest } from "../../../../axios/Axios";
import * as s from "./style";

const ProfileUpload = (props) => {
  const [file, setFile] = useState(null);
  const [filePath, setFilePath] = useState("");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHViX2lkIjoxLCJpYXQiOjE2MjIwMjU3ODV9.HtxbzxBBbA3-80WE1gP8sefqRoLC2DlBaAlyAX4xdzQ";

  const onClickWhiteScreen = () => {
    props.setProfileModal(false);
  };

  const onChangeFile = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    let str = e.target.value.slice(12, e.target.value.length);
    setFilePath(str);
  };

  const onSubmitFile = async () => {
    try {
      const fd = new FormData();
      file && fd.append("file", file);
      const data = FileRequest(
        "PUT",
        `banner/2`,
        {
          authorization: `Bearer ${token}`,
        },
        fd
      );
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <s.WhiteScreen onClick={onClickWhiteScreen}></s.WhiteScreen>
      <s.Modal>
        <s.Title>
          <p>프로필 사진 업로드</p>
        </s.Title>
        <s.FileInput>
          <s.FileBtn htmlFor="fileUpload">
            <p>파일 선택</p>
          </s.FileBtn>
          <s.FilePath htmlFor="fileUpload">
            <p>{filePath}</p>
          </s.FilePath>
          <s.FileUpload
            id="fileUpload"
            type="file"
            onChange={onChangeFile}
          ></s.FileUpload>
        </s.FileInput>
        <s.UploadBtn onClick={onSubmitFile}>업로드 하기</s.UploadBtn>
      </s.Modal>
    </>
  );
};

export default ProfileUpload;
