import React from 'react';
import * as S from './Style';
import WhiteScreen from '../common/WhiteScreen';
import { FileRequest } from '../../../../axios/Axios';

const ProfileDeleteModal = ({closeModal}) => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHViX2lkIjoxLCJpYXQiOjE2MjIwMjU3ODV9.HtxbzxBBbA3-80WE1gP8sefqRoLC2DlBaAlyAX4xdzQ";

  const onClickWhiteScreen = () => {
    closeModal(null);
  }

  const onClickCancelBtn = () => {
    closeModal(null);
  }

  const onClickProfileDelete = () => {
    try{
      FileRequest("patch", 'profile/1', {
        authorization: `Bearer ${token}`
      },{}).then((e)=>{
        alert("프로필 사진이 초기화되었습니다.");
        closeModal(null);
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
          <p>프로필 사진을 초기화합니다</p>
        </S.Title>
        <S.CheckButton onClick={onClickProfileDelete}>확인</S.CheckButton>
        <S.NoButton onClick={onClickCancelBtn}>취소</S.NoButton>
      </S.DelContent>
    </>
  );
}

export default ProfileDeleteModal;