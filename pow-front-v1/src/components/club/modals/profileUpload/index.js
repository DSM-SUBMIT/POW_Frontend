import React, { useState } from "react";
import { FileRequest } from "../../../../axios/Axios";
import * as s from "./style";

const ProfileUpload = ({ closeModal, clubId }) => {
  const [file, setFile] = useState(null);
  const [filePath, setFilePath] = useState("");

  const onClickWhiteScreen = () => {
    closeModal(null);
  };

  const onChangeFile = (e) => {
    setFile(e.target.files[0]);
    let str = e.target.value.slice(12, e.target.value.length);
    setFilePath(str);
  };

  const onSubmitFile = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
    const fd = new FormData();
    file && fd.append("file", file);
    FileRequest(
      "PUT",
      `profile/${clubId}`,
      {
        authorization: `Bearer ${token}`,
      },
      fd
    ).then((e) => {
      closeModal(null);
      alert("프로필 사진이 업로드 되었습니다.");
      window.location.reload();
    }).catch((e)=> {
      closeModal(null);
      alert("업로드에 실패했습니다.");
      setFile(null);
      setFilePath("");
    });
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
