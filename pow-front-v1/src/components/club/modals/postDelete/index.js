import React, { useState } from "react";
import * as S from "./Style";
import WhiteScreen from "../common/WhiteScreen";
import { DeletePost } from "../../../../axios/Axios";

const PostDelete = ({ closeModal, clubId, projectId }) => {
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);
  const onClickPostDelete = () => {
    closeModal(null);
  };

  const onClickCancel = () => {
    closeModal(null);
  };

  return (
    <>
      <WhiteScreen onClick={onClickPostDelete} />
      <S.DelContent>
        <S.Title>
          <p>게시글을 삭제합니다</p>
        </S.Title>
        <S.CheckButton
          onClick={(e) => {
            DeletePost(token, clubId, projectId)
              .then(function () {
                setLoading(false);
                alert("삭제가 되었습니다.");
                window.location.reload();
              })
              .catch(function (error) {
                alert("문제가 발생했습니다.");
                console.log(error);
              });
          }}
        >
          확인
        </S.CheckButton>
        <S.NoButton onClick={onClickCancel}>취소</S.NoButton>
      </S.DelContent>
    </>
  );
};

export default PostDelete;
