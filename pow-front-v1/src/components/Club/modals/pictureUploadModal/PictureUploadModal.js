import React from 'react';
import * as s from './style';
import picturesmall from '../../../IMG/picturesmall.png';

const PictureUploadModal = () => {
  return(
    <>
      <s.WhiteScreen></s.WhiteScreen>
      <s.Modal>
        <s.Title>
          <p>사진 업로드</p>
        </s.Title>
        <s.List>
          <div>
            <img src={picturesmall}></img>
            <span>프로필 사진</span>
          </div>
          <div>
            <img src={picturesmall}></img>
            <span>배너 사진</span>
          </div>
        </s.List>
      </s.Modal>
    </>
  )
}

export default PictureUploadModal;