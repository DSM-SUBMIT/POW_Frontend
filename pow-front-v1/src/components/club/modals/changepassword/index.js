import React, { useState } from 'react';
import * as s from './Style';
import { changePw } from '../../../../axios/Axios';
import pow from '../../../img/pow.png';

const NewPw = ({setNewPwModal}) => {
    const [password, setPassword] = useState();

    const onClickEnter = async() => {
        const { data } = await changePw(password);
        const token = data['access-token'];
        
        alert("성공 ..!");
    }
    const onClickAway = () => {
        setNewPwModal(false);
    }

    return(
        <>
            <s.Modal onClick={onClickAway}/>
            <s.ModalCenter>
                <s.PwModal>
                    <s.Logo>
                        <img src={pow} alt=""></img>
                    </s.Logo>
                    <s.PwSpan>
                        <span>비밀번호 변경</span>
                    </s.PwSpan>
                    <s.PwInput>
                        <input
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                            value={password}
                            className="ModalInput"
                            placeholder="현재 비밀번호를 입력해주세요"/>
                    </s.PwInput>
                    <s.NewPwInput>
                        <input
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                            value={password}
                            className="ModalInput"
                            placeholder="변경할 비밀번호를 입력해주세요"/>
                        <input
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                            value={password}
                            className="ModalInput"
                            placeholder="비밀번호 확인"/>
                    </s.NewPwInput>
                    <s.EnterBtn>
                        <button onClick={onClickEnter} className="LoginBtn" >ENTER</button>
                    </s.EnterBtn>
                </s.PwModal>
            </s.ModalCenter>
        </>
    )
}

export default NewPw;