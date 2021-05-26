import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 370px;
`;

const Score = styled.div``;

const Bestfriend = styled.div`
  margin-top: 50px;
`;

const Restart = styled(Link)``;
const ResultPresenter = () => (
  <Container>
    <div>
      <Score>{`ScoreA: ${localStorage.getItem("scoreA")}`}</Score>
      <Score>{`ScoreB: ${localStorage.getItem("scoreB")}`}</Score>
      <Score>{`ScoreC: ${localStorage.getItem("scoreC")}`}</Score>
      위와 같은 성격을 가진
      {localStorage.getItem("userName")
        ? ` ${localStorage.getItem("userName")}님의 베스트 프렌드는?`
        : " 당신의 베스트 프렌드는?"}
    </div>

    <Bestfriend>입니다.</Bestfriend>
    <Restart to="/">다시하기!</Restart>
  </Container>
);

export default ResultPresenter;
