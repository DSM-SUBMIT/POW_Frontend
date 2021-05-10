import styled from "styled-components";

export const ModifyContent = styled.div`
  width: 630px;
  height: 500px;
  background: #ffffff;
  border-radius: 23px;
  z-index: 1;
  border: 2px soild #000000;
  text-align: center;
  h4 {
    font-family: NanumSquare_ac;
    margin-top: 49px;
  }
`;

export const InputText = styled.input`
  width: 458px;
  height: 49px;
  background-color: #f4f4f4;
  border-radius: 17px;
  border: none;
  margin-top: 10px;
  ::placeholder {
    text-align: center;
    font-size: 18px;
    color: #8d8d8d;
  }
`;

export const DayBox = styled.div`
  width: 458px;
  height: 49px;
  background-color: #f4f4f4;
  border-radius: 17px;
  border: none;
  margin: auto;
  margin-top: 23px;
`;

export const StartLable = styled.label`
  margin-left: 5px;
`;

export const InputDay = styled.input`
  width: 129px;
  height: 30px;
  background-color: #ffffff;
  border: none;
`;

export const FileLabel = styled.label`
  padding: 10px 20px;
  background-color: #bacff3;
  cursor: pointer;
  border-radius: 17px;
  width: 132px;
  height: 49px;
  color: #ffffff;
  margin-top: 50px;
`;

export const FileInput = styled.input`
  width: 0;
  height: 0;
  margin-left: 18px;
  margin-top: 50px;
`;

export const Uploadname = styled.input`
  height: 48px;
  width: 300px;
  font-size: 18px;
  padding: 0 10px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 17px;
  align-items: center;
  color: #8d8d8d;
  margin-top: 50px;
  ::placeholder {
    text-align: center;
    font-size: 20px;
  }
`;

export const UploadButton = styled.button`
  width: 140px;
  height: 55px;
  background: #f4bea1;
  border-radius: 30px;
  border: none;
  color: #ffffff;
  margin-top: 22px;
`;
