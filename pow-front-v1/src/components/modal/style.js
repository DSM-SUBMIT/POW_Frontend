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

// Login Modal

export const LoginModal = styled.div`
    box-sizing: border-box;
    width: 492px;
    height: 492px;
    border: 1px solid #707070;
    padding: 10px 20px;
    background-color: white;
    z-index: 5;
`

export const Etc = styled.span`
    display: flex;
    justify-content: flex-end;
    span {
        font-size: 30px;
        cursor: pointer;
    }
`

export const LoginInput = styled.div`
    width: 452px;
    height: 176px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const LoginBtn = styled.div`
    height: 142px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Change = styled.div`
    color: #707070;
    font-size: 10px;
    padding-bottom: 5px;
    :hover {
        cursor: pointer;
    }

`

// NewPw Modal
export const PwModal = styled.div`
    width: 492px;
    height: 536px;
    box-sizing: border-box;
    border: 1px solid #707070;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: white;
    z-index: 5;
    div {
        font-size: 15px;
    }
`

export const PwSpan = styled.span`
    height: 17px;
    text-align: center;
    color: #707070;
`

export const PwInput = styled.div`
    height: 102px;
    width: 452px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const NewPwInput = styled.div`
    width: 452px;
    height: 125px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
`

export const EnterBtn = styled.div`
    height: 120px;
    display: flex;
    align-items: center;
`

//account Delete Modal
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