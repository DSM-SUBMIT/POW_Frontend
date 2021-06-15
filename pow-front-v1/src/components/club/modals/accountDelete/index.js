import React, { useState } from "react";
import * as s from "./Style";
import pow from "../../../img/pow.png";
import { deleteAccount, getToken } from "../../../../axios/Axios";

const AccountDel = ({ setAccountDelModal }) => {
  const [password, setPassword] = useState();

  const onClickAway = () => {
    setAccountDelModal(false);
  };

  const onClickAgree = async () => {
    try {
      await deleteAccount();
        if(password === getToken()){
          alert("계정 탈퇴 성공");
        }
        else {
          alert("비밀번호를 다시 입력하세요")
        }
    } catch (err) {
      console.log(err)
    }
  };

  const onClickCancel = () => {
    alert("취소ㅇ");
  };

  return (
    <>
      <s.Modal onClick={onClickAway}></s.Modal>
      <s.ModalCenter>
        <s.DelModal>
          <s.Logo>
            <img src={pow} alt="" />
            <span>계정 탈퇴</span>
          </s.Logo>
          <s.PwInput>
            <input
              onChange={(event) => {
                setPassword(event.target.value)
              }}
              value={password}
              className="ModalInput"
              placeholder="비밀번호를 입력해주세요"
            ></input>
          </s.PwInput>
          <span className="accountCheck">계정을 탈퇴하시겠습니까?</span>
          <s.DelBtn>
            <button onClick={onClickAgree} className="agree">
              네
            </button>
            <button onClick={onClickCancel} className="cancel">
              아니요
            </button>
          </s.DelBtn>
        </s.DelModal>
      </s.ModalCenter>
    </>
  );
};

export default AccountDel;
