import React, { useState } from 'react';
import * as s from './style';
import pow from '../Img/pow.png';
// import search from '../Img/search.png';
import Login from '../Modal/Login';
import AccountDel from '../Modal/AccountDel';
import NewPw from '../Modal/NewPw';

const Header = () => {
    const [loginModal, setLoginModal] = useState(false);
    const [AccountDelModal, setAccountDelModal] = useState(false);
    const [NewPwModal, setNewPwModal] = useState(false);

    const onClickLogin = () => {
        setLoginModal(true);
    }
    
    return(
        <>
            {loginModal && (
                <Login
                    setLoginModal={setLoginModal}
                    setAccountDelModal={setAccountDelModal}
                    setNewPwModal={setNewPwModal}
                ></Login>
            )}
            {AccountDelModal && (
                <AccountDel setAccountDelModal={setAccountDelModal}></AccountDel>
            )}
            {NewPwModal && (
                <NewPw setNewPwModal={setNewPwModal}></NewPw>
            )}

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
                        <s.LoginArea>
                            <button onClick={onClickLogin}>LOGIN</button>
                        </s.LoginArea>
                    </s.Area>
                    <s.Area>
                        <s.KindCenter/>
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
                            <h4>로그인을 해주세요!</h4>
                        </s.State>
                    </s.Area>
                </s.Center>
            </s.Header>
        </>
        
    );
}

export default Header;