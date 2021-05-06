import React from 'react';
import * as s from './style';
import Banner from '../IMG/Banner.png';

const Club = () => {
  return(
    <>
      <s.BannerImg>
        <s.LogoDiv>
          <span>.</span>
        </s.LogoDiv>
        <img src={Banner}></img>
      </s.BannerImg>
    </>
  );
}

export default Club;