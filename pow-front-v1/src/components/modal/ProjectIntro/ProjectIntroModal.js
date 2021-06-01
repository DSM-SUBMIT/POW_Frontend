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
            <p>.</p>
          </S.IntroduceBox>
        </S.IntroContent>
      </GreyBox>
    </modal>
  );
};

export default ProjectlntroModal;
