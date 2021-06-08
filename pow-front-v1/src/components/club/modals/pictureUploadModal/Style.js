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
  height: 210px;
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

export const List = styled.div`
  margin-top: 36px;
  display: flex;
  position: relative;
  justify-content: center;

  div{
    display: flex;
    align-items: center;
    width: 180px;
    height: 60px;
    background-color: #F4F4F4;
    border-radius: 17px;
    justify-content: center;
    cursor: pointer;

    :first-child{
      margin-right: 22px;
    }
    
    :hover{
      background-color: #CECECE;
    }
  }

  img{
    margin-right: 17px;
  }

  span{
    font-size: 19px;
    color: #8D8D8D;
  }
`