import styled from "styled-components";

export const IntroContent = styled.div`
  width: 1188px;
  height: 718px;
  background: #ffffff;
  border-radius: 27px;
  z-index: 1;
  border: 2px soild #000000;
  text-align: center;
`;

export const HeaderContent = styled.div`
  width: 1054px;
  height: 116px;
  padding-top: 38px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

export const WriteBar = styled.div`
  width: 80%;
  height: 61px;
  p {
    width: 178px;
    display: inline;
    font-size: 20px;
    align: left;
  }
`;

export const TitleBar = styled.div`
  width: 80%;
  height: 61px;
  margin-bottom: 27px;
  h3 {
    width: 656px;
    display: inline;
    margin-right: 40px;
  }
  p {
    width: 178px;
    display: inline;
    font-size: 20px;
  }
`;

export const IntroduceBox = styled.div`
  width: 1054px;
  height: 470px;
  background: #f3f3f3;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 15px;
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
