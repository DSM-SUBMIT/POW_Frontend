import React, { useState } from "react";
import * as s from "./Style";
import { FileRequest } from "../../../../axios/Axios";

const BannerUpload = ({setBannerModal}) => {
  const [filePath, setFilePath] = useState('');
  const [file, setFile] = useState(null);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHViX2lkIjoxLCJpYXQiOjE2MjIwMjU3ODV9.HtxbzxBBbA3-80WE1gP8sefqRoLC2DlBaAlyAX4xdzQ";

  const onClickWhiteScreen = () => {
    setBannerModal(false);
  }

  const onChangeFile = (e) => {
    setFile(e.target.files[0]);
    let str = e.target.value.slice(12, e.target.value.length);
    setFilePath(str);
  };

  const onCLickUpload = () => {
    try {
      const fd = new FormData();
      fd.append("file", file);
      FileRequest('PUT', 'banner/1', {
        authorization: `Bearer ${token}`,
      }, fd);
      setBannerModal(false);
      alert("배너 사진이 업로드 되었습니다.");

    } catch(e) {
      console.log(e);
    }
  };

  return (
    <>
      <s.WhiteScreen onClick={onClickWhiteScreen}/>
      <s.Modal>
        <s.Title>
          <p>배너 사진 업로드</p>
        </s.Title>
        <s.FileInput>
          <s.FileBtn htmlFor="fileUpload" ><p>파일 선택</p></s.FileBtn>
          <s.FilePath htmlFor="fileUpload"><p>{filePath}</p></s.FilePath>
          <s.FileUpload 
            id="fileUpload" 
            type="file" 
            accept="image/jpeg,image/png" 
            onChange={onChangeFile}/>
        </s.FileInput>
        <s.UploadBtn onClick={onCLickUpload}>업로드 하기</s.UploadBtn>
      </s.Modal>
    </>
  );
};

export default BannerUpload;
