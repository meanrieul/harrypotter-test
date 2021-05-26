import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  margin-bottom: 100px;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 300px;
`;

const Button = styled.button``;

const Greeting = styled.div`
  margin: 100px;
  height: 40px;
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
      <div>
        마법사 세상에서 당신의 든든한 조력자가 될 베스트 프렌드를 찾아보세요!
      </div>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="이름을 입력해주세요."
          value={userName}
          onChange={updateName}
        />
        <Button>저장</Button>
      </Form>
      <Greeting>{currentName && `안녕하세요, ${currentName}님!`}</Greeting>
      <Start to="/questions">시작하기</Start>
    </Container>
  );

export default HomePresenter;
