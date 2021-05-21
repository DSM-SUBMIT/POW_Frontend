import React from "react";
import * as S from "../ProjectIntro/style";
import GreyBox from "../common/GreyBox";
import IntroduceHeader from "./IntroduceHeader";

const ProjectlntroModal = () => {
  return (
    <modal>
      <GreyBox>
        <S.IntroContent>
          <IntroduceHeader />
          <S.IntroduceBox>
            <p>
              안녕 지금은 5시 22분이고 새벽이다 <br />
              이건 언제 끝날 수 있을까 <br />
              사실 지금 기절할 수 있는데 돈 내기 싫다 <br />
              ㅎ 진짜 싫다 ㅎㅎㅎㅎ <br />
              하 내가 왜 미뤘을까 다음부터 내가 미루면 백엔드 한다 <br />
              사실 백엔드도 해야하긴 하는데 프론트도 제대로 못 하는디 <br />
              했다가 이도저도 아니게 되면 진짜 멘탈 빵 <br />
              근데 갑자기 왜 이런 이야기 하지 <br />
              아무튼 나는 언제 잘 수 있을까 <br />
              다음부터 미루지 말자 파이팅 <br />
              근데 나는 왜 프론트를 선택했지 <br />
              바로 보일 수 있다는 게 좋아서 선택했지만 <br />
              힘들다 후하후하후하후하 <br />
              근데 내가 선택한 거니까 후회하더라도 엄청 빡시게 해보고 하자{" "}
              <br />
              빡시게 하면 후회는 안 하지 않을까 싶 <br />
              하 그냥 아무말 쓰려다가 갑자기 메모장이 됐 <br />
              6시는 잘 수 있겠지 <br />
              6시까지 하면 나는 진짜 밤새코딩한 사람 <br />
              거의 다 끝냈다 짝짝짝짝 <br />
            </p>
          </S.IntroduceBox>
        </S.IntroContent>
      </GreyBox>
    </modal>
  );
};

export default ProjectlntroModal;
