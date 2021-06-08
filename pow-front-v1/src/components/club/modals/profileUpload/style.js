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

export const Title = styled.div`
  margin-top: 25px;
  border-bottom: 1px solid #707070;
  width: 305px;
  text-align: center;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  p{
    font-size: 20px;
    color: #8D8D8D
  }
`

export const FileInput = styled.div`
  margin-top: 26px;
  display: flex;
  justify-content: center;
`

export const FileUpload = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip:rect(0,0,0,0);
  border: 0;
`

export const FileBtn = styled.label`
  margin-right: 17px;
  height: 60px;
  width: 132px;
  background-color: #BACFF3;
  color: #FFFFFF;
  border-radius: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;

  :hover{
    background-color: #77A1EB;
  }
`

export const FilePath = styled.label`
  width: 403px;
  height: 60px;
  border-radius: 17px;
  background-color: #F4F4F4;
  color: #8D8D8D;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #8D8D8D;
`

export const UploadBtn = styled.div`
  margin-top: 22px;
  width: 151px;
  height: 60px;
  background-color: #F4BEA1;
  color: #FFFFFF;
  border-radius: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  :hover{
    background-color: #F29969;
  }
`