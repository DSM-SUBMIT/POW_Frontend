import React from 'react';
import * as S from './Style';
import WhiteScreen from '../common/WhiteScreen';

const ProfileDeleteModal = ({closeModal}) => {

  const onClickWhiteScreen = () => {
    closeModal(null);
  }

  const onClickCancelBtn = () => {
    closeModal(null);
  }

  return(
    <>
      <WhiteScreen onClick={onClickWhiteScreen} />
      <S.DelContent>
        <S.Title>
          <p>프로필 사진을 초기화합니다</p>
        </S.Title>
        <S.CheckButton>확인</S.CheckButton>
        <S.NoButton onClick={onClickCancelBtn}>취소</S.NoButton>
      </S.DelContent>
    </>
  );
}

export default ProfileDeleteModal;