import styled from "styled-components";

export const CmContent = styled.div`
  width: 644px;
  height: 608px;
  background: #ffffff;
  border-radius: 23px;
  z-index: 1;
  border: 1px solid #707070;
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

export const WriteBox = styled.div`
  width: 488px;
  height: 394px;
  border: 1px solid #707070;
  border-radius: 23px;
  margin-top: 30px;
  color: #ffffff;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

export const InputContent = styled.textarea`
  width: 474px;
  height: 380px;
  border: none;
  border-radius: 23px;
  padding: 7px;
  ::placeholder {
    text-align: center;
  }
  :focus {
    outline: none;
  }
`;

export const UploadButton = styled.button`
  width: 130px;
  height: 52px;
  background: #f4bea1;
  border-radius: 30px;
  border: none;
  color: #ffffff;
  margin-top: 30px;
`;
