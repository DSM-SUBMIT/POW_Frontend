import styled from "styled-components";

export const IntroContent = styled.div`
  width: 1188px;
  height: 708px;
  background: #ffffff;
  border-radius: 27px;
  border: 1px solid #707070;
  text-align: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
`;

export const HeaderContent = styled.div`
  width: 1054px;
  height: 116px;
  padding-top: 18px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

export const WriteBar = styled.div`
  width: 1054px;
  height: 61px;
`;

export const CreatedDate = styled.p`
  width: 200px;
  float: left;
  font-size: 20px;
`;

export const ModifiedDate = styled.p`
  width: 200px;
  float: left;
  font-size: 20px;
`;

export const Writer = styled.p`
  width: 200px;
  float: right;
  font-size: 20px;
`;

export const TitleBar = styled.div`
  width: 1054px;
  height: 61px;
  margin-bottom: 27px;
  display: inline;
`;

export const IntroduceTitle = styled.h3`
  width: 656px;
  float: left;
  text-align: left;
`;

export const StartDate = styled.p`
  width: 378px;
  float: right;
  font-size: 20px;
`;

export const IntroduceBox = styled.div`
  width: 1054px;
  height: 490px;
  background: #f3f3f3;
  margin-top: 18px;
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
