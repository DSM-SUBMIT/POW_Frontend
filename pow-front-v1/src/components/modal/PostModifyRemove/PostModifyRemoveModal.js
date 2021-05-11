import React from "react";
import * as S from "../PostModifyRemove/style";
import GreyBox from "../common/GreyBox";
import * as SVG from "../common/SvgCollection";

const PostModifyRemoveModal = () => {
  return (
    <modal>
      <GreyBox>
        <S.PmrContent>
          <S.Title>
            <p>게시글 수정 / 삭제</p>
          </S.Title>
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
