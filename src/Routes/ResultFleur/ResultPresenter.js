import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 370px;
  margin-top: 100px;
`;

const Score = styled.div``;

const Bestfriend = styled.div`
  margin-top: 100px;
`;

const Restart = styled(Link)`
  margin-top: 100px;
`;

const Share = styled.button`
  margin-top: 100px;
`;
const ResultPresenter = ({
  handleShare,
  handleShareResult,
  copied,
  resultCopied,
}) => (
  <Container>
    <div>
      {localStorage.getItem("userName")
        ? ` ${localStorage.getItem("userName")}님의 베스트 프렌드는?`
        : " 당신의 베스트 프렌드는?"}
    </div>

    <Bestfriend>플뢰르입니다.</Bestfriend>
    <Restart to="/">다시하기!</Restart>
    <Share id="share" onClick={handleShare}>
      친구들에게 이 테스트 공유하기
    </Share>
    {copied && "클립보드 복사 완료"}
    <Share id="share" onClick={handleShareResult}>
      내 테스트 결과 공유하기
    </Share>
    {resultCopied && "클립보드 복사 완료"}
  </Container>
);

export default ResultPresenter;
