import styled from 'styled-components';

export const BannerImg = styled.div`
  width: 100%;
  height: 375px;
  border-bottom: 10px solid;
  border-image: linear-gradient(to right,
    #B096CD, #AD94CD, #8E7CD0, #625BD4, #AE95CD);
  border-image-slice: 1;
  img {
    width: 1375px;
    height: 330px;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

export const LogoDiv = styled.div`
  position: absolute;
  bottom: 27%;
  margin-left: 135px;
  z-index: 2;
  --b: 20px;
  display: inline-block;
  width: 340px;

  img{
    position: absolute;
    width: 260px;
    height: 80px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
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
    width: 300px;
    height: 300px;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: var(--c,linear-gradient(to bottom, #C2A8D1, #9378C6, #6A5FCF, #5353DC, #C89299, #F1A882));
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
    width: 340px;
    height: 340px;
    background-color: white;
    position: absolute;
    bottom: 27%;
    margin-left: 135px;
    z-index: 2;
    border-radius: 50%;
`

export const LeftContent = styled.div`
  margin-top: 240px;
  float: left;
`

export const ClubIntroBox = styled.div`
  width: 420px;
  height: 395px;
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

export const FixDate = styled.p`
    font-size: 20px;
    color: #8D8D8D;
    position: relative;
    top: 70%;
    left: 50%;
`

export const RightContent = styled.div`
  margin-top: 46px;
  position: relative;
  margin-left: 668px;
`

export const Upload = styled.div`
  display: flex;
  align-items: center;
  
  div{
    display: flex;
    align-items: center;
    margin-right: 25px;
    height: 50px;
    background-color: #F4F4F4;
    border-radius: 17px;
    justify-content: center;
    font-size: 20px;
    color: #676767;
    cursor: pointer;

    :hover{
      background-color: #CECECE;
    }

    img {
      width: 30px;
      margin-right: 10px;
    }
  }
`

export const PictureUpload = styled.div`
  width: 230px;
`

export const ClubFix = styled.div`
  width: 275px;
`

export const PostUpload = styled.div`
  width: 250px;
`

export const Content = styled.div`
  margin-top: 50px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 700px;
  width: 1100px;

  ::-webkit-scrollbar{
    width: 15px;
  }

  ::-webkit-scrollbar-thumb{
    background-color: #9F91D6;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track{
    background-color: white;
    border-radius: 10px;
  }
`

export const Post = styled.div`
  width: 1000px;
  height: 200px;
  border: 3px solid #CBCBCB;
  box-shadow: 1px 1px 5px #CBCBCB;
  border-radius: 27px;
  margin-bottom: 35px;

  img{
    float: right;
    margin-right: 41px;
  }
`

export const PostDiv = styled.div`
  display: flex;
  margin-top: 20px;
  height: 0;
  p{
    margin: 0;
    margin-right: 18px;
    font-size: 20px;
    color: #8D8D8D;

    :first-child{
      margin-left: 45px;
    }
  }
`

export const Title = styled.div`
  margin-top: 50px;
  margin-left: 105px;
  font-size: 50px;
`

export const StartDate = styled.div`
  margin-top: 10px;
  position:relative;
  left: 61%;
  font-size: 20px;
  color: #8D8D8D;
`