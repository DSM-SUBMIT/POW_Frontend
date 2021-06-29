import React from 'react';
import * as S from './Style';
import WhiteScreen from '../common/WhiteScreen';
import { FileRequest } from '../../../../axios/Axios';

const ProfileDeleteModal = ({closeModal, clubId}) => {

  const onClickWhiteScreen = () => {
    closeModal(null);
  }

  const onClickCancelBtn = () => {
    closeModal(null);
  }

  const onClickProfileDelete = () => {
    try{
      FileRequest("patch", `profile/${clubId}`, {
        authorization: `Bearer ${localStorage.getItem("token")}`
      },{}).then((e)=>{
        alert("프로필 사진이 초기화되었습니다.");
        closeModal(null);
        window.location.reload();
      })
    } catch(e){
      alert("잠시 후 다시 시도해주세요.");
      console.log(e);
    }
  }

  return(
    <>
      <WhiteScreen onClick={onClickWhiteScreen} />
      <S.DelContent>
        <S.Title>
          <p>프로필 사진을 초기화합니다.</p>
        </S.Title>
        <S.CheckButton onClick={onClickProfileDelete}>확인</S.CheckButton>
        <S.NoButton onClick={onClickCancelBtn}>취소</S.NoButton>
      </S.DelContent>
    </>
  );
}

export default ProfileDeleteModal;