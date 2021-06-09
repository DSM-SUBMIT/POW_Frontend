import React from 'react';
import * as s from './style';
import rosie from '../img/rosie.JPG';

/*
API 통신
    - 서버 - 클라이언트
    - HTTP 프로토콜 사용
        - Hyper Text Transfer Protocol
        - Hyper Text Markup Language
        - JSON, XML, HTML, etc.
    - POST, GET, PUT, DELETE, OPTION, etc.
    - RESTful API
    - 로그인
        - BaseURL: https://submit-pow.herokuapp.com
        - API DOCS: https://www.notion.so/3596d88335de44b4a19a07e3cb3a3110
*/

const Main = () => {
    return(
        <s.Main>
            <s.Center>
                <s.Line>
                    <s.Club>
                        <img src={rosie} alt=""/>
                    </s.Club>
                    <s.Club/>
                    <s.Club/>
                    <s.Club/>
                </s.Line>
                <s.Line>
                    <s.Club/>
                    <s.Club/>
                    <s.Club/>
                    <s.Club/>
                </s.Line>
                <s.Line>
                    <s.Club/>
                    <s.Club/>
                    <s.Club/>
                    <s.Club/>
                </s.Line>
                <s.Line>
                    <s.Club/>
                    <s.Club/>
                    <s.Club/>
                    <s.Club/>
                </s.Line>
            </s.Center>
        </s.Main>
    )
}

export default Main;
