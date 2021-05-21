import React, { useState } from 'react';
import * as s from './style';
import { FileRequest } from '../../../Axios/FileAxios';

const BannerUpload = (props) => {
  const [filePath, setFilePath] = useState('');
  const [file, setFile] = useState(null);
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpzZmRmZmRmYXNkYXNkc29obiBEb2UiLCJpYXQiOjE1MTYyMzkwMjJ9.Ki0_w07k5UI-03Tz-pQFuy40ul-13K7zXMYXrFSDnlw';

  const onClickWhiteScreen = () => {
    props.setBannerModal(false);
  }

  const onChangeFile = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    console.log(file);
    let str = e.target.value.slice(12, e.target.value.length);
    setFilePath(str);
  }

  const onCLickUpload = () => {
    console.log(file);
    try{
      const {data} = FileRequest('GET', 'banner/asd.png', {}, {});
    } catch(e) {
      console.log(e);
    }
    
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
        <s.UploadBtn onClick={onCLickUpload}>업로드 하기</s.UploadBtn>
      </s.Modal>
    </>
  )
}

export default BannerUpload;