import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Option = styled.div`
  display: flex;
  width: 80px;
  flex-direction: column;
  align-items: center;
  font-size: 10px;
`;

const Checkbox = ({ num }) => (
  <Container>
    <Option>
      <input type="radio" name={num} value={1} />
      <label>절대 아니다</label>
    </Option>
    <Option>
      <input type="radio" name={num} value={2} />
      <label>아니다</label>
    </Option>
    <Option>
      <input type="radio" name={num} value={3} />
      <label>보통</label>
    </Option>
    <Option>
      <input type="radio" name={num} value={4} />
      <label>그렇다</label>
    </Option>
    <Option>
      <input type="radio" name={num} value={5} />
      <label>매우 그렇다</label>
    </Option>
  </Container>
);

export default Checkbox;
