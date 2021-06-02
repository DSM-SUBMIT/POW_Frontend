import React from "react";
import * as S from "../PostModifyRemove/style";
import WhiteScreen from "../common/WhiteScreen";
import * as SVG from "../common/SvgCollection";

const PostModifyRemoveModal = (props) => {
  const onClickGreyBox = () => {
    props.setPostModifyRemoveModal(false);
  };

  const onClickPostModify = () => {
    props.setPostModifyRemoveModal(false);
    props.setPostModifyModal(true);
  };

  const onClickPostDelete = () => {
    props.setPostModifyRemoveModal(false);
    props.setPostDeleteModal(true);
  };

  return (
    <modal>
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
    </modal>
  );
};

export default PostModifyRemoveModal;
