import styled from 'styled-components';

export const Modal = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: #B9B9B9;
    opacity: 0.5;
    z-index: 1;
`

export const ModalCenter = styled.div`
    position: fixed;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    button {
        :hover {
        cursor: pointer;}
    }
    .ModalInput {
        box-sizing: border-box;
        padding: 5px 15px 5px 20px;
        width: 300px;
        height: 55px;
        margin-bottom: 8px;
        background-color: #F4F4F4;
        color: black;
        border: none;
        font-size: 15px;
    }
    .LoginBtn {
        background-color: white;
        color: #F4BEA1;
        width: 70px;
        height: 30px;
        border-radius: 30px;
        border: 1px solid #707070;
        font-size: 10px;
    }
`

export const Logo = styled.div`
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    img {
        width: 142px;
        height: 51px;
    }
    span {
        color: #707070;
    }
`

export const DelModal = styled.div`
    width: 430px;
    height: 450px;
    box-sizing: border-box;
    border: 1px solid #707070;
    padding-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: white;
    z-index: 5;
    .accountCheck{
        font-size: 16px;
        color: #8D8D8D;
    }
`

export const PwInput = styled.div`
    width: 452px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
`

export const DelBtn = styled.div`
    width: 250px;
    padding-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    button {
        width: 95px;
        height: 59px;
        color: white;
        font-size: 15px;
        border: none;
        border-radius: 1em;
    }
    .agree {
        background-color: #F4BEA1;
    }
    .cancel {
        background-color: #BACFF3;
    }
`