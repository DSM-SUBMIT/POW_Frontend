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

export const Content = styled.div`
  margin-top: 50px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 700px;
  width: 1100px;
  ::-webkit-scrollbar {
    width: 15px;
  }
  Content::-webkit-scrollbar-thumb {
    background-color: #9f91d6;
    border-radius: 10px;
  }
  Content::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 10px;
  }
`;

export const HeaderContent = styled.div`
  width: 80%;
`;
export const WriteBar = styled.div`
  width: 80%;
`;

export const TitleBar = styled.div`
  width: 80%;
`;

export const IntroduceBox = styled.div`
  width: 1054px;
  height: 470px;
  background-color: blue;
`;
