import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Checkbox from "Components/checkbox";

const questions = [
  {
    title: "질문1",
    options: ["보기1", "보기2", "보기3", "보기4"],
  },
  {
    title: "질문2",
    options: ["보기1", "보기2", "보기3", "보기4"],
  },
  {
    title: "질문3",
    options: ["보기1", "보기2", "보기3", "보기4"],
  },
  {
    title: "질문4",
    options: ["보기1", "보기2", "보기3", "보기4"],
  },
  {
    title: "질문5",
    options: ["보기1", "보기2", "보기3", "보기4"],
  },
  {
    title: "질문6",
    options: ["보기1", "보기2", "보기3", "보기4"],
  },
  {
    title: "질문7",
    options: ["보기1", "보기2", "보기3", "보기4"],
  },
  {
    title: "질문8",
    options: ["보기1", "보기2", "보기3", "보기4"],
  },
];
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 370px;
`;

const Theme = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Question = styled.div`
  margin-bottom: 50px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Save = styled.button``;

const Title = styled.h1``;

const Restart = styled(Link)``;

const Result = styled.button``;
const QuestPresenter = ({ handleSubmit, questionId }) => (
  <Container>
    <Title>{`Question ${questionId}`}</Title>
    <Theme onSubmit={handleSubmit}>
      <h2>{questions[questionId - 1].title}</h2>
      <Question>
        <Checkbox num="Question" options={questions[questionId - 1].options} />
      </Question>
      <ButtonContainer>
        {questionId === "8" ? (
          <Result>결과 보기</Result>
        ) : (
          <Save>다음 페이지로</Save>
        )}

        <Restart to="/">다시하기!</Restart>
      </ButtonContainer>
    </Theme>
  </Container>
);
export default QuestPresenter;
