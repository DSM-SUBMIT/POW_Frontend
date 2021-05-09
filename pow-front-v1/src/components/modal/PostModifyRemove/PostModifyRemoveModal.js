import React from "react";
import * as S from "../PostModifyRemove/style";
import GreyBox from "../common/GreyBox";
import * as SVG from "../common/SvgCollection";

const PostModifyRemoveModal = () => {
  const modalClose = () => {
    return false;
  };
  return (
    // <modal hidde={!show}>
    <modal>
      <GreyBox onClick={modalClose}>
        <S.PmrContent>
          <h4>게시글 수정 / 삭제</h4>
          <S.Button>
            <SVG.ModifySvg />
            게시글 수정
          </S.Button>
          <S.Button>
            <SVG.RemoveSvg />
            게시글 삭제
          </S.Button>
        </S.PmrContent>
      </GreyBox>
    </modal>
  );
};

export default PostModifyRemoveModal;
