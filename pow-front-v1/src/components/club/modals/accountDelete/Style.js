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
        width: 354px;
        height: 59px;
        border-radius: 30em;
        background-color: #F4F4F4;
        color: black;
        border: none;
        font-size: 15px;
    }
    .LoginBtn {
        background-color: white;
        color: #51ADCF;
        width: 172px;
        height: 65px;
        border-radius: 30em;
        border: 1px solid #707070;
        font-size: 20px;
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
    width: 460px;
    height: 400px;
    box-sizing: border-box;
    border: 1px solid #707070;
    padding-top: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: white;
    z-index: 5;
    .accountCheck{
        font-size: 16px;
        color: #8D8D8D;
    }
`

export const PwInput = styled.div`
    height: 102px;
    width: 452px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DelBtn = styled.div`
    width: 250px;
    height: 112px;
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