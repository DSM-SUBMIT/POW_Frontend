import React from "react";
import * as S from "../projectIntro/style";
import WhiteScreen from "../common/WhiteScreen";
import IntroduceHeader from "./IntroduceHeader";

const ProjectlntroModal = (props) => {
  const { setProjectIntroModal } = props;
  const onClickProjectIntroModal = () => {
    setProjectIntroModal(false);
  };

  return (
    <>
      <WhiteScreen onClick={onClickProjectIntroModal} />
      <S.IntroContent>
        <IntroduceHeader />
        <S.IntroduceBox>
          <p>.</p>
        </S.IntroduceBox>
      </S.IntroContent>
    </>
  );
};

export default ProjectlntroModal;
