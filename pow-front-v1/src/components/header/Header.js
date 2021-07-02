import React, { useState, useEffect } from 'react';
import * as s from './style';
import pow from '../img/pow.png';
import searchImg from '../img/search.png'
//import search from '../Img/search.png';
import { Login, NewPw, AccountDel } from '../club/modals/index';
import { search } from '../../axios/Axios';
import { useHistory } from 'react-router';

const Header = () => {
    const [loginModal, setLoginModal] = useState(false);
    const [AccountDelModal, setAccountDelModal] = useState(false);
    const [NewPwModal, setNewPwModal] = useState(false);
    const [searching, setSearching] = useState();
    const [searchResult, setSearchResult] = useState();

    // const [account, setAccount] = useState();

    const getToken = localStorage.getItem('token');
    const onClickLogin = () => {
    setLoginModal(true);
    };

    const history = useHistory();

    const clubSearch = () => {
        history.push(`/club/${searchResult}`)
    }

    // const accountState = () => {
    //     getAccount().then((res) => {
    //         console.log(setAccount(res.data.clubs))
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }

    const onSubmitSearch = (event) => {
        event.preventDefault();
        search(searching)
        .then((response) => {
            setSearchResult(response.data.clubs[0].id)
        })
        .catch((err) => {
            alert(err)
        })
    }

    const logoutClickHandler = () => {
        alert("로그아웃 되었습니다")
        return(
            localStorage.removeItem('token'),
            window.location.replace("/")
        )
    }

    useEffect(() => {
        console.log(searchResult)
    }, [searchResult]);

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
                        {/* <Link to="/"> */}
                            <s.PowLogo>
                                <img src={pow} alt=""></img>
                                <span>Project Once Writing</span>
                            </s.PowLogo>
                        {/* </Link> */}
                        <s.Searching>
                            <form onSubmit={onSubmitSearch}>
                                <input
                                    onChange={(event) => {
                                        setSearching(event.target.value)
                                    }}
                                    value={searching}
                                    placeholder="검색어를 입력해주세요" />
                            </form>
                            <button onClick={clubSearch}></button>
                        </s.Searching>
                        <s.LoginArea>
                            {getToken === null ? (
                                <button onClick={onClickLogin}>Login</button>    
                             ) : (
                                <button onClick={logoutClickHandler}>Logout</button>
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
                                // : (<h4>현재 {account} 로그인 중입니다</h4>
                            )}
                        </s.State>
                    </s.Area>
                </s.Center>
            </s.Header>
        </>
        
    );
}

export default Header;
