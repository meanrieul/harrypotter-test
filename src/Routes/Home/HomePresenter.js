import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h1`
  margin-top: 100px;
  font-size: 23px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 370px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 300px;
`;

const Button = styled.button``;

const Greeting = styled.div`
  height: 40px;
  margin-bottom: 100px;
`;

const Start = styled(Link)`
  display: flex;
  width: 200px;
  height: 40px;
  border: 2px solid black;
  border-radius: 14px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: black;
  color: white;
  font-size: 20px;
`;

const HomePresenter = ({
  userName,
  loading,
  handleSubmit,
  updateName,
  currentName,
  reset,
}) =>
  loading ? (
    <>{reset()}</>
  ) : (
    <Container>
      <Title>호그와트에 입학한 당신의 찐친은?</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="이름을 입력해주세요."
          value={userName}
          onChange={updateName}
        />
        <Button>저장</Button>
      </Form>
      <Greeting>{currentName && `안녕하세요, ${currentName}님!`}</Greeting>
      <Start className="button" to="/question/1">
        시작하기
      </Start>
    </Container>
  );

export default HomePresenter;
