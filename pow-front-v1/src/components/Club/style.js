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
  bottom: 15%;
  margin-left: 135px;
  z-index: 2;
  --b: 20px;
  display: inline-block;
  width:445px;

  img{
    position: absolute;
    width: 340px;
    height: 100px;
  }

  ::after{
    content:"";
    display:inline-block;
    padding-top:100%;
  }

  ::before{
    content:"";
    position:absolute;
    z-index:-1;
    width: 405px;
    height: 405px;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: var(--c,linear-gradient(to right, #C2A8D1, #9378C6, #6A5FCF, #5353DC, #C89299, #F1A882));
    padding: var(--b);
    border-radius: 50%;
    background-color: white;
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`

export const WhiteBox = styled.div`
  width: 445px;
  height: 445px;
  background-color: white;
  position: absolute;
  bottom: 15%;
  margin-left: 135px;
  z-index: 2;
  border-radius: 50%;
`

export const LeftContent = styled.div`
  margin-top: 275px;
`

export const ClubIntroBox = styled.div`
  width: 470px;
  height: 445px;
  border: 3px solid #AEADAD;
  border-radius: 27px;
  margin-left: 121px;
  box-shadow: 1px 1px 5px #AEADAD;

  span{
    position: relative;
    top: -7%;
    transform: translateY(-50%);
    margin-left: 44px;
    font-size: 40px;
    background-color: white;
    color: #707070;
  }
`

export const Writer = styled.div`
  float: right;
  font-size: 20px;
  color: #8D8D8D;
  margin-top: 33px;
  margin-right: 40px;
`

export const FixDate = styled.div`
  font-size: 20px;
  color: #8D8D8D;
  float: right;
`