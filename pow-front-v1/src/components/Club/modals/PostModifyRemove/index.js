import React from "react";
import * as S from "./style";
import WhiteScreen from "../common/WhiteScreen";
import * as SVG from "../common/SvgCollection";

const PostModifyRemoveModal = (props) => {
  const { setPostModifyRemoveModal, setPostModifyModal, setPostDeleteModal } =
    props;
  const onClickGreyBox = () => {
    setPostModifyRemoveModal(false);
  };

  const onClickPostModify = () => {
    setPostModifyRemoveModal(false);
    setPostModifyModal(true);
  };

  const onClickPostDelete = () => {
    setPostModifyRemoveModal(false);
    setPostDeleteModal(true);
  };

  return (
    <>
      <WhiteScreen onClick={onClickGreyBox} />
      <S.PmrContent>
        <S.Title>
          <p>게시글 수정 / 삭제</p>
        </S.Title>
        <S.Button onClick={onClickPostModify}>
          <SVG.ModifySvg />
          게시글 수정
        </S.Button>
        <S.Button onClick={onClickPostDelete}>
          <SVG.RemoveSvg />
          게시글 삭제
        </S.Button>
      </S.PmrContent>
    </>
  );
};

export default PostModifyRemoveModal;
