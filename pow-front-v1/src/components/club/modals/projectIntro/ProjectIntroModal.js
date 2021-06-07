import React from "react";
import * as S from "./style";
import WhiteScreen from "../common/WhiteScreen";
import IntroduceHeader from "./IntroduceHeader";

const ProjectlntroModal = ({ closeModal }) => {
  const onClickProjectIntroModal = () => {
    closeModal(null);
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
