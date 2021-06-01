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
const ResultPresenter = ({ handleShare, copied }) => (
  <Container>
    <div>
      <Score>{`Score1: ${localStorage.getItem("score1")}`}</Score>
      <Score>{`Score2: ${localStorage.getItem("score2")}`}</Score>
      <Score>{`Score3: ${localStorage.getItem("score3")}`}</Score>
      <Score>{`Score4: ${localStorage.getItem("score4")}`}</Score>
      <Score>{`Score5: ${localStorage.getItem("score5")}`}</Score>
      <Score>{`Score6: ${localStorage.getItem("score6")}`}</Score>
      <Score>{`Score7: ${localStorage.getItem("score7")}`}</Score>
      <Score>{`Score8: ${localStorage.getItem("score8")}`}</Score>
      위와 같은 성격을 가진
      {localStorage.getItem("userName")
        ? ` ${localStorage.getItem("userName")}님의 베스트 프렌드는?`
        : " 당신의 베스트 프렌드는?"}
    </div>

    <Bestfriend>입니다.</Bestfriend>
    <Restart to="/">다시하기!</Restart>
    <Share id="share" onClick={handleShare}>
      친구들에게 이 테스트 공유하기
    </Share>
    {copied && "클립보드 복사 완료"}
  </Container>
);

export default ResultPresenter;
