import React, { useState } from "react";
import * as s from "./Style";
import pow from "../../../img/pow.png";
import { deleteAccount, login } from "../../../../axios/Axios";

const AccountDel = ({ setAccountDelModal }) => {
  const [code, setCode] = useState();
  const [password, setPassword] = useState();
  const onClickAway = () => {
    setAccountDelModal(false);
  };

  // const onClickAgree = async () => {
  //   try {
  //     await deleteAccount();
  //       if(password === login(password)){
  //         alert("계정 탈퇴 성공");
  //       }
  //       else {
  //         alert("비밀번호를 다시 입력하세요")
  //       }
  //   } catch (err) {
  //     console.log(err)
  //   }
  // };

  const onClickDeleteLogin = async () => {
    try {
      const { data }  = await login(code, password);
      const token = data['access-token'];
      localStorage.setItem('token', token);
      alert("로그인")
  } catch (error) {
      if(error.response.data.code === 'CLUB404-0') {
          alert('계정을 찾을 수 없습니다');
      }
  }
  }
  
  const onClickDel =async () => {
    try {
        await deleteAccount();
        alert("계정 탈퇴 성공");
    } catch (err) {
        console.log(err)
      }
  }


  const onClickCancel = () => {
    alert("취소");
    setAccountDelModal(false);
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
                setCode(event.target.value);
              }}
              value={code}
              className="ModalInput"
              placeholder="코드를 입력해주세요"
            ></input>
            <input
              onChange={(event) => {
                setPassword(event.target.value)
              }}
              value={password}
              className="ModalInput"
              placeholder="비밀번호를 입력해주세요"
            ></input>
            <button onClick={onClickDeleteLogin} className="LoginBtn">LOGIN</button>
          </s.PwInput>
          <span className="accountCheck">계정을 탈퇴하시겠습니까?</span>
          <s.DelBtn>
            <button onClick={onClickDel} className="agree">
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
