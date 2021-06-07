import React from "react";
import * as S from "./style";
import WhiteScreen from "../common/WhiteScreen";
import IntroduceHeader from "./IntroduceHeader";

const ProjectlntroModal = ({ selectModal }) => {
  const onClickProjectIntroModal = () => {
    selectModal(null);
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
