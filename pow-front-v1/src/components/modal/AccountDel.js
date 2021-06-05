import React from 'react';
import * as s from './style';
import pow from './Img/pow.png';

const AccountDel = ({setAccountDelModal}) => {
    const onClickAway = () => {
        setAccountDelModal(false);
    }
    
    const onClickAgree = () => {
        alert("계정 탈퇴 성공 !");
    }

    const onClickCancel = () => {
        alert("취소ㅇ");
    }

    return(
        <>
            <s.Modal onClick={onClickAway}></s.Modal>
            <s.ModalCenter>
                <s.DelModal>
                    <s.Logo>
                        <img src={pow} alt=""/>
                        <span>계정 탈퇴</span>
                    </s.Logo>
                    <s.PwInput>
                        <input className="ModalInput" placeholder="비밀번호를 입력해주세요"></input>
                    </s.PwInput>
                    <span className="accountCheck">계정을 탈퇴하시겠습니까?</span>
                    <s.DelBtn>
                        <button onClick={onClickAgree} className="agree">네</button>
                        <button onClick={onClickCancel} className="cancel">아니요</button>
                    </s.DelBtn>
                </s.DelModal>
            </s.ModalCenter>
        </>
    )
}

export default AccountDel;