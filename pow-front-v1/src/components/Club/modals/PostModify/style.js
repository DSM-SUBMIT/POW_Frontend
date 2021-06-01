import styled from "styled-components";
import DatePicker from "react-datepicker";

export const ModifyContent = styled.div`
  width: 1148px;
  height: 810px;
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
    margin-top: 27px;
  }
`;

export const ModifyHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 21px;
`;

export const InputText = styled.input`
  width: 455px;
  height: 56px;
  background-color: #f4f4f4;
  border-radius: 17px;
  border: none;
  margin-right: 49px;
  ::placeholder {
    text-align: center;
    font-size: 18px;
    color: #8d8d8d;
  }
`;

export const DayBox = styled.div`
  width: 455px;
  height: 46px;
  background-color: #f4f4f4;
  border-radius: 17px;
  border: none;
  padding-top: 14px;
`;

export const DayLable = styled.label`
  margin-left: 9px;
`;

export const SelectDate = styled(DatePicker)`
  height: 18px;
  width: 80px;
  padding: 6px 12px;
  font-size: 14px;
  text-align: center;
  border: 1px solid #e5e5e5;
  outline: none;
  cursor: pointer;
`;

export const WriteBox = styled.div`
  width: 974px;
  height: 500px;
  border: 1px solid #707070;
  border-radius: 23px;
  color: #8d8d8d;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  padding: 7px;
  margin-top: 23px;
`;

export const InputContent = styled.textarea`
  width: 957px;
  height: 480px;
  border-radius: 23px;
  border: none;
  padding: 10px;
  ::placeholder {
    text-align: center;
  }
  :focus {
    outline: none;
  }
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #red;
  }
  ::-webkit-scrollbar-track {
    background-color: #7662c6;
    border-radius: 10px;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f9f9f9;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #7662c6;
    border-radius: 30px;
  }
`;

export const UploadButton = styled.button`
  width: 140px;
  height: 55px;
  background: #f4bea1;
  border-radius: 30px;
  border: none;
  color: #ffffff;
  margin-top: 30px;
  font-size: 17px;
`;
