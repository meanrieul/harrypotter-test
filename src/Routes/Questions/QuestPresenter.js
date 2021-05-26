import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Checkbox from "Components/checkbox";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 370px;
`;

const Theme = styled.form`
  width: 100%;
`;

const Question = styled.div`
  margin-bottom: 30px;
`;

const Save = styled.button``;

const Result = styled(Link)``;

const QuestPresenter = ({ handleSubmitA, handleSubmitB, handleSubmitC }) => (
  <Container>
    <Theme onSubmit={handleSubmitA}>
      <Question>
        Q1. 용기
        <Checkbox num="Q1" />
      </Question>
      <Question>
        Q2. 용기
        <Checkbox num="Q2" />
      </Question>
      <Question>
        Q3. 용기
        <Checkbox num="Q3" />
      </Question>
      <Question>
        Q4. 용기
        <Checkbox num="Q4" />
      </Question>
      <Question>
        Q5. 용기
        <Checkbox num="Q5" />
      </Question>
      <Save>저장</Save>
    </Theme>
    <Theme onSubmit={handleSubmitB}>
      <Question>
        Q1. 지식
        <Checkbox num="Q1" />
      </Question>
      <Question>
        Q2. 지식
        <Checkbox num="Q2" />
      </Question>
      <Question>
        Q3. 지식
        <Checkbox num="Q3" />
      </Question>
      <Question>
        Q4. 지식
        <Checkbox num="Q4" />
      </Question>
      <Question>
        Q5. 지식
        <Checkbox num="Q5" />
      </Question>
      <Save>저장</Save>
    </Theme>
    <Theme onSubmit={handleSubmitC}>
      <Question>
        Q1. 욕심
        <Checkbox num="Q1" />
      </Question>
      <Question>
        Q2. 욕심
        <Checkbox num="Q2" />
      </Question>
      <Question>
        Q3. 욕심
        <Checkbox num="Q3" />
      </Question>
      <Question>
        Q4. 욕심
        <Checkbox num="Q4" />
      </Question>
      <Question>
        Q5. 욕심
        <Checkbox num="Q5" />
      </Question>
      <Save>저장</Save>
    </Theme>

    <Result to="/result">결과보기</Result>
  </Container>
);

export default QuestPresenter;
