import { useState } from 'react';
import {Link} from 'react-router-dom'
import * as s from './style';
import pow from '../img/pow.png';

//import search from '../Img/search.png';
import { Login, NewPw, AccountDel } from "../club/modals/index";

const Header = ({ AccountState, setAccountState }) => {
  const [loginModal, setLoginModal] = useState(false);
  const [AccountDelModal, setAccountDelModal] = useState(false);
  const [NewPwModal, setNewPwModal] = useState(false);

  const onClickLogin = () => {
    setLoginModal(true);
  };

  return (
    <>
      {loginModal && (
        <Login
          setLoginModal={setLoginModal}
          setAccountDelModal={setAccountDelModal}
          setNewPwModal={setNewPwModal}
        />
      )}
      {AccountDelModal && (
        <AccountDel setAccountDelModal={setAccountDelModal} />
      )}
      {NewPwModal && <NewPw setNewPwModal={setNewPwModal} />}

            <s.Header>
                <s.Center>
                    <s.Area>
                        <Link to="/">
                            <s.PowLogo>
                                <img src={pow} alt=""></img>
                                <span>Project Once Writing</span>
                            </s.PowLogo>
                        </Link>
                        <s.Searching>
                            <input placeholder="검색어를 입력해주세요"></input>
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
