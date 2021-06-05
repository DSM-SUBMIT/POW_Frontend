import React from 'react';
import * as S from './Style';
import WhiteScreen from '../common/WhiteScreen';

const BannerDelete = ({setBannerDeleteModal}) => {

  const onClickWhiteScreen = () => {
    setBannerDeleteModal(false);
  }

  return(
    <modal>
      <WhiteScreen onClick={onClickWhiteScreen} />
      <S.DelContent>
        <S.Title>
          <p>베너사진을 삭제합니다</p>
        </S.Title>
        <S.CheckButton>확인</S.CheckButton>
        <S.NoButton>취소</S.NoButton>
      </S.DelContent>
    </modal>
  );
}

export default BannerDelete;