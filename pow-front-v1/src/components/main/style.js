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
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    
`

export const Club = styled.div`
    width: 227px;
    height: 227px;
    border-radius: 50%;
    border: 0.1em solid #707070;
    margin-bottom: 40px;
    img {
        width: 227px;
        height: 227px;
        border-radius: 50%;
    }
`