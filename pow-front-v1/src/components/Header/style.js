import styled from 'styled-components';

export const Header = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: fixed;
    width: 100%;
    height: 200px;
    background-color: white;
    border-bottom: 1px solid #5348B2;
    display: flex;
    justify-content: center;
`

export const Center = styled.div`
    width: 1280px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`

export const Area = styled.div`
    margin-top: 28.5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const PowLogo = styled.div`
    width: 142px;
    height: 51.18px;
    text-align: center;
    span {
        font-size: 12px;
        color: #8D8D8D;
    }
`

export const Searching = styled.div`
    input {
        width: 522px;
        height: 35px;
        font-size: 15px;
        border-radius: 3em;
        border: 0.12px solid #5345B2;
        padding: 15px;
    }
`

export const Login = styled.div`
    input {
        width: 142px;
        height: 60px;
        background-color: #F1A882;
        color: white;
        border-radius: 2.5em;
        border: none;
        font-size: 20px;
    }
`

export const KindCenter = styled.div`
    width: 220px;
`

export const Kind = styled.div`
    width: 367px;
    height: 79px;
    display: flex;
`
export const Select = styled.div`
    width: 113px;
    height: 71px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    span {
        font-size: 25px;
        color: #8D8D8D;
    }
    div {
        width: 113px;
        height: 16px;
        background-color: #F1A882;
        border-radius: 3em;
    }
`

export const State = styled.div`
    width: 220px;
    display: flex;
    justify-content: flex-end;
    span {
        padding-bottom: 15px;
        left: 0;
        color: #8D8D8D;
    }
`