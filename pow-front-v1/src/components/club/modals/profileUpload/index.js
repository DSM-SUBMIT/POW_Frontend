import React, { useState } from "react";
import { FileRequest } from "../../../../axios/Axios";
import * as s from "./style";

const ProfileUpload = ({ closeModal }) => {
  const [file, setFile] = useState(null);
  const [filePath, setFilePath] = useState("");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHViX2lkIjoxLCJpYXQiOjE2MjIwMjU3ODV9.HtxbzxBBbA3-80WE1gP8sefqRoLC2DlBaAlyAX4xdzQ";

  const onClickWhiteScreen = () => {
    closeModal(null);
  };

  const onChangeFile = (e) => {
    setFile(e.target.files[0]);
    let str = e.target.value.slice(12, e.target.value.length);
    setFilePath(str);
  };

  const onSubmitFile = async () => {
    try {
      const fd = new FormData();
      file && fd.append("file", file);
      FileRequest(
        "PUT",
        `banner/2`,
        {
          authorization: `Bearer ${token}`,
        },
        fd
      ).then((e) => {
        closeModal(null);
        alert("프로필 사진이 업로드 되었습니다.");
        window.location.reload();
      });
      setFile(null);
      setFilePath("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <s.WhiteScreen onClick={onClickWhiteScreen} />
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
            accept="image/jpeg,image/png"
            onChange={onChangeFile}
          />
        </s.FileInput>
        <s.UploadBtn onClick={onSubmitFile}>업로드 하기</s.UploadBtn>
      </s.Modal>
    </>
  );
};

export default ProfileUpload;
