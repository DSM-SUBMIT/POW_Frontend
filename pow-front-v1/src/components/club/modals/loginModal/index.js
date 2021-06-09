import React, { useState } from 'react';
import * as s from './Style';
import pow from '../../../img/pow.png';
import { login } from '../../../../axios/Axios';

const Login = ({setLoginModal, setAccountDelModal, setNewPwModal}) => {
    const [code, setCode] = useState();
    const [password, setPassword] = useState();

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

    // const asyncFunc1 = (callback) => {
    //     /*

    //     */
    //     callback(foo);
    // };
    // const asyncFunc2 = (foo) => {};

    // const callback = (foo) => {}
    // const foo = asyncFunc1(callback);


    // 동기, 비동기
    // callback, Promise, async/await

    // HTTP - 4XX, 5XX throw
    // Destructuring assign: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    // React Form: https://ko.reactjs.org/docs/forms.html
    // LocalStorage: https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage
    // Local Storage, Session Storage: https://ko.javascript.info/localstorage

    const onClickLogin = async () => {
        try {
            const { data } = await login(code, password);
            const token = data['access-token'];

            localStorage.setItem('token', token);
        } catch (error) {
            // 에러 처리
            if (error.response.data.code === 'CLUB404-0') {
                alert('동아리 계정을 찾을수 없습니다');
            }
            // alert(error.response.data.message);
        }
    };

    return(
        <>
            <s.Modal onClick={onClickAway}></s.Modal>
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
                        <input onChange={(event) => {
                            setCode(event.target.value);
                        }} className="ModalInput" placeholder="코드를 입력해주세요" value={code}/>
                        <input type="password" onChange={(event) => {
                            setPassword(event.target.value);
                        }} className="ModalInput" placeholder="비밀번호를 입력해주세요" value={password}/>
                    </s.LoginInput>
                    <s.LoginBtn>
                        <s.Change onClick={onClickNewPw}>비밀번호 변경하기</s.Change>
                        <button onClick={onClickLogin} className="LoginBtn">LOGIN</button>
                    </s.LoginBtn>
                </s.LoginModal>
            </s.ModalCenter>
        </>
    )
    }


export default Login;