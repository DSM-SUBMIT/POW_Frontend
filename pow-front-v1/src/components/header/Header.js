import React, { useState, useEffect } from 'react';
import * as s from './style';
import pow from '../img/pow.png';
//import search from '../Img/search.png';
import { Login, NewPw, AccountDel } from '../club/modals/index';
import { search } from '../../axios/Axios';

const Header = ({AccountState, setAccountState}) => {
    const [loginModal, setLoginModal] = useState(false);
    const [AccountDelModal, setAccountDelModal] = useState(false);
    const [NewPwModal, setNewPwModal] = useState(false);
    const [searching, setSearching] = useState();

    useEffect(() => {
        // componentDidMount
    }, []);

    const onClickLogin = () => {
        setLoginModal(true);
    }

    const onSubmitSearch = (event) => {
        event.preventDefault();

        search(searching)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
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
                            <button onClick={onClickLogin}>Login</button>
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