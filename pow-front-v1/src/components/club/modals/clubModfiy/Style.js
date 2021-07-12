import styled from "styled-components";

export const CmContent = styled.div`
  width: 500px;
  height: 300px;
  background: #ffffff;
  border-radius: 23px;
  border: 1px solid #707070;
  text-align: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
`;

export const Title = styled.div`
  border-bottom: 1px solid #707070;
  width: 250px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  p {
    margin-top: 20px;
    font-family: NanumSquare_ac;
    font-size: 20px;
  }
`;

export const WriteBox = styled.div`
  width: 400px;
  height: 104px;
  border: 1px solid #707070;
  border-radius: 23px;
  margin-top: 20px;
  color: #ffffff;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px;
`;

export const InputContent = styled.textarea`
  width: 383px;
  height: 100px;
  border: none;
  border-radius: 23px;
  padding-top: 10px;
  text-align: center;
  font-size: 18px;
  ::placeholder {
    text-align: center;
  }
  :focus {
    outline: none;
  }
`;

export const UploadButton = styled.button`
  width: 130px;
  height: 48px;
  background: #f4bea1;
  border-radius: 30px;
  border: none;
  color: #ffffff;
  margin-top: 20px;
  cursor: pointer;
  :hover {
    background-color: #f29969;
  }
`;
