import React, { Component } from 'react';
import * as s from './style';
import pow from '../Img/pow.png';
import search from '../Img/search.png';

class Header extends Component {
    render() {
        return(
            <s.Header>
                <s.Center>
                    <s.Area>
                        <s.PowLogo>
                            <img src={pow} alt=""></img>
                            <span>Project Once Writing</span>
                        </s.PowLogo>
                        <s.Searching>
                            <input placeholder="검색어를 입력해주세요"></input>
                        </s.Searching>
                        <s.Login>
                            <input type="button" value="Login"></input>
                        </s.Login>
                    </s.Area>
                    <s.Area>
                        <s.KindCenter></s.KindCenter>
                        <s.Kind>
                            <s.Select>
                                <span>전공</span>
                                <div/>
                            </s.Select>
                            <s.Select>
                                <span>창체</span>
                                <div/>
                            </s.Select>
                            <s.Select>
                                <span>자율</span>
                                <div/>
                            </s.Select>
                        </s.Kind>
                        <s.State>
                            <span>로그인을 해주세요!</span>
                        </s.State>
                    </s.Area>
                </s.Center>
            </s.Header>
        );
    }
}


// popModal = function() {
//     this.setState({
//         visible : true
//     });
// }

// closeModal = function() {
//     this.setState({
//         visible : false
//     });
// }

export default Header;