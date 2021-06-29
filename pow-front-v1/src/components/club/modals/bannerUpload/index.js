import React, { useState } from "react";
import * as s from "./Style";
import { FileRequest } from "../../../../axios/Axios";

const BannerUpload = ({ closeModal, clubId }) => {
  const [filePath, setFilePath] = useState("");
  const [file, setFile] = useState(null);

  const onClickWhiteScreen = () => {
    closeModal(null);
  };

  const onChangeFile = (e) => {
    setFile(e.target.files[0]);
    let str = e.target.value.slice(12, e.target.value.length);
    setFilePath(str);
  };

  const onCLickUpload = () => {
    const token = localStorage.getItem("token");
    const fd = new FormData();
    file && fd.append("file", file);
    FileRequest(
      "PUT",
      `banner/${clubId}`,
      {
        authorization: `Bearer ${token}`,
      },
      fd
    ).then((e)=> {
      if(e.data === "file updated"){
        closeModal(null);
        alert("배너 사진이 업로드 되었습니다.");
        // window.location.reload();
      } else {
        alert(e.data.name);
        closeModal(null);
      }
    });
  };

  return (
    <>
      <s.WhiteScreen onClick={onClickWhiteScreen} />
      <s.Modal>
        <s.Title>
          <p>배너 사진 업로드</p>
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
        <s.UploadBtn onClick={onCLickUpload}>업로드 하기</s.UploadBtn>
      </s.Modal>
    </>
  );
};

export default BannerUpload;
