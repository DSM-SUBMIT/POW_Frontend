import styled from 'styled-components';
  
export const Main = styled.div`
    margin: 0;
    padding-top: 16.692em;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
`

export const Center = styled.div`
    width: 1150px;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`

export const Line = styled.div`
    width: 100%;
    height: 299px;
    display: flex;
    justify-content: space-between;
    background-color: white;
    margin-top: 3em;
`

export const Club = styled.div`
    width: 227px;
    height: 227px;
    border-radius: 50%;
    border: 0.1em solid #707070;
    img {
        width: 227px;
        height: 227px;
        border-radius: 50%;
    }
`