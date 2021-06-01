import styled from 'styled-components';

export const LoginCenter = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const LoginModal = styled.div`
    box-sizing: border-box;
    width: 492px;
    height: 492px;
    border: 1px solid #707070;
    padding: 10px 20px;
`

export const Etc = styled.span`
    width: 452px;
    font-size: 30px;
    display: flex;
    justify-content: flex-end;
`

export const Logo = styled.div`
    height: 122px;
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

export const LoginInput = styled.div`
    width: 452px;
    height: 176px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    input {
        box-sizing: border-box;
        padding: 5px 15px 5px 15px;
        width: 354px;
        height: 59px;
        border-radius: 30em;
        background-color: #F4F4F4;
        color: black;
        border: none;
        font-size: 15px;
    }
`

export const LoginBtn = styled.div`
    height: 142px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
        background-color: white;
        color: #51ADCF;
        width: 172px;
        height: 65px;
        border-radius: 30em;
        border: 1px solid #707070;
        font-size: 20px;
    }

`

export const Change = styled.div`
    color: #707070;
    font-size: 10px;
    padding-bottom: 5px;

`