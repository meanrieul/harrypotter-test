import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img from "assets/home3.png";

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 370px;
`;

const Form = styled.form`
  position: absolute;
  top: 260px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  all: unset;
  font-size: 24px;
  width: 200px;
  color: white;
`;

const Button = styled.button`
  height: 30px;
  border: none;
  cursor: pointer;
  background-color: whitesmoke;
`;

const Greeting = styled.div`
  height: 40px;
  position: absolute;
  top: 300px;
  color: white;
`;

const Start = styled(Link)`
  position: absolute;
  display: flex;
  top: 320px;
  left: 90px;
  width: 180px;
  height: 80px;
`;

const Cover = styled.img`
  position: absolute;
  width: 375px;
  height: 720px;
  top: 0;
  z-index: -1;
`;
const HomePresenter = ({ userName, handleSubmit, updateName, currentName }) => (
  <Container>
    <Cover src={img} />{" "}
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="이름을 입력해주세요"
        value={userName}
        onChange={updateName}
      />
      <Button>저장</Button>
    </Form>
    <Greeting>{currentName && `안녕하세요, ${currentName}님!`}</Greeting>
    <Start className="button" to="/question/1" />
  </Container>
);
export default HomePresenter;
