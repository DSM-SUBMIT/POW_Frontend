import React from 'react';
import * as s from './style';
import pow from '../Img/pow.png';
import search from '../Img/search.png';

const Header = () => {
    return(
        <s.header>
            <s.logo>
                <s.powLogo>
                    <img src={pow}></img>
                </s.powLogo>
                <span>
                    Project Once Writing
                </span>
            </s.logo>
            <s.nav>
                <s.search>
                    <input placeholder="검색어를 입력해주세요">
                    </input>
                </s.search>
                <s.center>
                </s.center>
                <s.select>
                    <span>전공</span>
                    <span>창체</span>
                    <span>자율</span>
                </s.select>
            </s.nav>
            <s.login>
                <input type="button" value="Login"></input>
                <span>로그인을 해주세요!</span>
            </s.login>
        </s.header>
    );
}

export default Header;