import styled from "styled-components";

export const Header = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 185px;
  background-color: white;
  border-bottom: 1px solid #5348b2;
  display: flex;
  justify-content: center;
  button {
    :hover {
      cursor: pointer;
    }
  }
`;

export const Center = styled.div`
  width: 1280px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Area = styled.div`
  margin-top: 28.5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const PowLogo = styled.div`
  width: 142px;
  height: 44px;
  text-align: center;
  span {
    font-size: 12px;
    color: #8d8d8d;
  }
`;

export const Searching = styled.div`
    display: flex;
    input {
        width: 522px;
        height: 35px;
        font-size: 15px;
        border-radius: 3em;
        border: 0.12px solid #5345B2;
        padding: 15px;
    }
`
export const LoginArea = styled.div`
  button {
    width: 142px;
    height: 50px;
    background-color: #f1a882;
    color: white;
    border-radius: 2.5em;
    border: none;
    font-size: 20px;
  }
`;

export const KindCenter = styled.div`
  width: 220px;
`;

export const Kind = styled.div`
  width: 367px;
  height: 79px;
  display: flex;
`;
export const Select = styled.div`
  width: 113px;
  height: 58px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  span {
    font-size: 25px;
    color: #8d8d8d;
  }
  div {
    width: 113px;
    height: 16px;
    background-color: #f1a882;
    border-radius: 3em;
  }
`;

export const State = styled.div`
  width: 220px;
  display: flex;
  justify-content: flex-end;
  h4 {
    padding-bottom: 20px;
    left: 0;
    color: #8d8d8d;
  }
`;
