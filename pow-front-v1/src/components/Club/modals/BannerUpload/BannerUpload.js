import React, { useState } from 'react';
import * as s from './style';

const BannerUpload = (props) => {
  const [filePath, setFilePath] = useState('');

  const onClickWhiteScreen = () => {
    props.setBannerModal(false);
  }

  const onChangeFile = (e) => {
    console.log("asdas");
    console.log(e.target.files[0]);
    let str = e.target.value.slice(12, e.target.value.length);
    setFilePath(str);
  }

  return(
    <>
      <s.WhiteScreen onClick={onClickWhiteScreen}></s.WhiteScreen>
      <s.Modal>
        <s.Title>
          <p>배너 사진 업로드</p>
        </s.Title>
        <s.FileInput>
          <s.FileBtn htmlFor="fileUpload" ><p>파일 선택</p></s.FileBtn>
          <s.FilePath htmlFor="fileUpload"><p>{filePath}</p></s.FilePath>
          <s.FileUpload id="fileUpload" type="file" onChange={onChangeFile}></s.FileUpload>
        </s.FileInput>
        <s.UploadBtn>업로드 하기</s.UploadBtn>
      </s.Modal>
    </>
  )
}

export default BannerUpload;