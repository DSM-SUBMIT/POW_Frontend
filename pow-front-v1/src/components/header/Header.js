import React, { useState, useEffect } from 'react';
import * as s from './style';
import pow from '../img/pow.png';
//import search from '../Img/search.png';
import { Login, NewPw, AccountDel } from '../club/modals/index';
import { search } from '../../axios/Axios';

const Header = () => {
    const [loginModal, setLoginModal] = useState(false);
    const [AccountDelModal, setAccountDelModal] = useState(false);
    const [NewPwModal, setNewPwModal] = useState(false);
    const [searching, setSearching] = useState();

    useEffect(() => {
        // componentDidMount
    }, []);

    const getToken = localStorage.getItem('token');

    const onClickLogin = () => {
        setLoginModal(true);
    }

    const onSubmitSearch = (event) => {
        event.preventDefault();
        if(getToken === null){
            alert("로그인을 먼저 해주세요!")
        }
        search(searching)
        .then((response) => {
            console.log(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    const logoutClickHandler = () => {
        alert("로그아웃 되었습니다")
        return(
            localStorage.removeItem('token'),
            window.location.replace("/")
        )
    }

    return(
        <>
            {loginModal && (
                <Login
                    setLoginModal={setLoginModal}
                    setAccountDelModal={setAccountDelModal}
                    setNewPwModal={setNewPwModal}
                />
            )}
            {AccountDelModal && (
                <AccountDel setAccountDelModal={setAccountDelModal}/>
            )}
            {NewPwModal && (
                <NewPw setNewPwModal={setNewPwModal}/>
            )}

            <s.Header>
                <s.Center>
                    <s.Area>
                        <s.PowLogo>
                            <img src={pow} alt=""></img>
                            <span>Project Once Writing</span>
                        </s.PowLogo>
                        <s.Searching>
                            <form onSubmit={onSubmitSearch}>
                                <input
                                    onChange={(event) => {
                                        setSearching(event.target.value)
                                    }}
                                    value={searching}
                                    placeholder="검색어를 입력해주세요" />
                            </form>
                        </s.Searching>
                        <s.LoginArea>
                            {getToken === null ? (
                                <button onClick={onClickLogin}>login</button>    
                             ) : (
                                <button onClick={logoutClickHandler}>logout</button>
                             )}
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
                            {getToken === null ? (
                                <h4>로그인을 해주세요!</h4>) 
                                : (<h4>현재 로그인 중입니다</h4>
                            )}
                        </s.State>
                    </s.Area>
                </s.Center>
            </s.Header>
        </>
        
    );
}

export default Header;