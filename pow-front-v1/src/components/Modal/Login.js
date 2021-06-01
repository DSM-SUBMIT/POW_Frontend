import React, { Component } from 'react';
import * as s from './style';
import pow from '../Img/pow.png';
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible : false
        }
    }
    render() {
        return(
            <s.LoginCenter>
                <s.LoginModal>
                    <s.Etc>...</s.Etc>
                    <s.Logo>
                        <img src={pow} alt=""/>
                        <span>로그인하기</span>
                    </s.Logo>
                    <s.LoginInput>
                        <input placeholder="코드를 입력해주세요"/>
                        <input placeholder="비밀번호를 입력해주세요"/>
                    </s.LoginInput>
                    <s.LoginBtn>
                        <s.Change>비밀번호 변경하기</s.Change>
                        <button>LOGIN</button>
                    </s.LoginBtn>
                </s.LoginModal>
            </s.LoginCenter>
        )
    }
}

export default Login;