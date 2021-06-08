import styled from 'styled-components';

export const WhiteScreen = styled.div`
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #B9B9B9;
  opacity: 0.5;
  z-index: 3;
`

export const Modal = styled.div`
  width: 660px;
  height: 254px;
  border-radius: 23px;
  border: 1px solid #707070;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  background-color: white;
`

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
    font-size: 20px;
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
  cursor: pointer;

  :hover{
    background-color: #fea678;
  }
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
  cursor: pointer;

  :hover{
    background-color: #73a4f8;
  }
`;
