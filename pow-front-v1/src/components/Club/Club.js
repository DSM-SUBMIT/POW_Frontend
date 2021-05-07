import React from 'react';
import * as s from './style';
import Banner from '../IMG/Banner.png';
import logo from '../IMG/logo.png';

const Club = () => {
  return(
    <>
      <header>
        <s.BannerImg>
            <s.WhiteBox></s.WhiteBox>
            <s.LogoDiv>
                <img src={logo}></img>
            </s.LogoDiv>
            <img src={Banner}></img>
          </s.BannerImg>
      </header>
      <section>
        <s.LeftContent>
          <s.ClubIntroBox>
            <span>
              Submit
            </span>
            <s.Writer>
              작성자: 김지민
            </s.Writer>
            <s.FixDate>
            수정일 : 2021-05-07
            </s.FixDate>
          </s.ClubIntroBox>
        </s.LeftContent>
      </section>
    </>
  );
}

export default Club;