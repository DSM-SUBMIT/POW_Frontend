import styled from "styled-components";

export const CmContent = styled.div`
  width: 620px;
  height: 280px;
  background: #ffffff;
  border-radius: 23px;
  z-index: 1;
  border: 2px soild #000000;
  text-align: center;
`;

export const Title = styled.div`
  border-bottom: 1px solid #707070;
  width: 300px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  p {
    font-family: NanumSquare_ac;
    font-seize: 20px;
  }
`;
export const InputText = styled.input`
  width: 458px;
  height: 49px;
  background-color: #f4f4f4;
  border-radius: 17px;
  border: none;
  margin-top: 20px;
  ::placeholder {
    text-align: center;
    font-size: 18px;
    color: #8d8d8d;
  }
`;

export const FileLabel = styled.label`
  padding: 10px 20px;
  background-color: #bacff3;
  cursor: pointer;
  border-radius: 17px;
  width: 102px;
  height: 42px;
  color: #ffffff;
`;

export const FileInput = styled.input`
  width: 0;
  height: 0;
  margin-top: 28px;
  margin-left: 18px;
`;

export const Uploadname = styled.input`
  height: 42px;
  width: 300px;
  font-size: 18px;
  padding: 0 10px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 17px;
  align-items: center;
  color: #8d8d8d;
  ::placeholder {
    text-align: center;
    font-size: 18px;
  }
`;

export const UploadButton = styled.button`
  width: 130px;
  height: 42px;
  background: #f4bea1;
  border-radius: 30px;
  border: none;
  color: #ffffff;
  margin-top: 22px;
`;
