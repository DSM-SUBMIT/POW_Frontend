import styled from 'styled-components';

export const BannerImg = styled.div`
  width: 100%;
  height: 425px;
  border-bottom: 10px solid;
  border-image: linear-gradient(to right,
    #B096CD, #AD94CD, #8E7CD0, #625BD4, #AE95CD);
  border-image-slice: 1;
  img {
    width: 1425px;
    height: 380px;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

export const LogoDiv = styled.div`
  position: absolute;
  bottom: 0%;
  width: 445px;
  height: 445px;
  border: 20px solid;
  border-image: linear-gradient(to right,
    #B096CD, #AD94CD, #8E7CD0, #625BD4, #AE95CD);
  border-image-slice: 1;
  display: inline-block;
  span {
    border-radius: 50%:
  }
`