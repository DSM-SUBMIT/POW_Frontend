import styled from "styled-components";

export const DelContent = styled.div`
  width: 620px;
  height: 207px;
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
  width: 300px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  p {
    font-family: NanumSquare_ac;
    font-seize: 20px;
  }
`;

export const CheckButton = styled.button`
  width: 95px;
  height: 59px;
  background-color: #f4bea1;
  border-radius: 17px;
  border: none;
  font-size: 19px;
  color: #ffffff;
  margin: 20px;
  margin-top: 33px;
`;

export const NoButton = styled.button`
  width: 95px;
  height: 59px;
  background-color: #bacff3;
  border-radius: 17px;
  border: none;
  font-size: 19px;
  color: #ffffff;
  margin: 20px;
  margin-top: 33px;
`;
