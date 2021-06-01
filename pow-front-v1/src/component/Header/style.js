import styled from 'styled-components';

export const header = styled.div`
    position: fixed;
    box-sizing: border-box;
    padding-top: 1em;
    width: 100%;
    height: 16.692em;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.12em solid #5348B2;
    align-items: center;
    background-color: white;
`

export const logo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    span {
        font-size: 0.8em;
        color: #8D8D8D;
        // width: 13.385em;
        // height: 1.462em;
    }
`

export const powLogo = styled.div`

`

export const nav = styled.div`
    flex-direction: column;
    justify-content: space-between;
`

export const search = styled.div`
    input {
        width: 73.231em;
        height: 5.000em;
        border-radius: 3em;
        border: 0.12em solid #5345B2;
    }
`

export const center = styled.div`
    height: 5em;
`

export const select = styled.div`
    width: 17em;
    margin: auto;
    display: flex;
    justify-content: space-between;
    span {
        font-size: 1.279em;
        color: #8D8D8D;
    }
`

export const login = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    input {
        width: 13.231em;
        height: 5.000em;
        background-color: #F1A882;
        color: white;
        border-radius: 2.5em;
        border: none;
        margin: 3em;
    }
    span {
        color: #8D8D8D;
    }
`