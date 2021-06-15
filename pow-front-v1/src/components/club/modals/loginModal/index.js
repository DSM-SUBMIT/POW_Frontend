import React, { useState } from 'react';
import * as s from './Style';
import pow from '../../../img/pow.png';
import { login } from '../../../../axios/Axios';

const Login = ({setLoginModal, setAccountDelModal, setNewPwModal }) => {
    const [code, setCode] = useState();
    const [password, setPassword] = useState();

    const onClickLogin = async () => {
        try {
            const { data }  = await login(code, password);
            const token = data['access-token'];
            localStorage.setItem('token', token);
            alert('로그인 되었습니다!');
            setLoginModal(false);
        } catch (error) {
            if(error.response.data.code === 'CLUB404-0') {
                alert('계정을 찾을 수 없습니다');
            }
        }
    }

    const onClickAway = () => {
        setLoginModal(false);
    };
    
    const onClickNewPw = () => {
        setLoginModal(false);
        setNewPwModal(true);
    };

    const onClickAccountDel = () => {
        setLoginModal(false);
        setAccountDelModal(true);
    }

    return(
        <>
            <s.Modal onClick={onClickAway}/>
            <s.ModalCenter>
                <s.LoginModal>
                    <s.Etc>
                        <span onClick={onClickAccountDel}>...</span>
                    </s.Etc>
                    <s.Logo>
                        <img src={pow} alt=""/>
                        <span>로그인하기</span>
                    </s.Logo>
                    <s.LoginInput>
                        <input
                            onChange={(event) => {
                                setCode(event.target.value);
                            }}
                            value={code}
                            className="ModalInput"
                            placeholder="코드를 입력해주세요"/>
                        <input
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                            type="password"
                            value={password}
                            className="ModalInput"
                            placeholder="비밀번호를 입력해주세요"/>
                    </s.LoginInput>
                    <s.LoginBtn>
                        <s.Change onClick={onClickNewPw}>비밀번호 변경하기</s.Change>
                        <button className="LoginBtn" onClick={onClickLogin}>LOGIN</button>
                    </s.LoginBtn>
                </s.LoginModal>
            </s.ModalCenter>
        </>
    )
    }


export default Login;