import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 28px;
  margin-top: 20px;
`;

export default () => (
  <Container>
    <span role="img" aria-label="Loading">
      😍
    </span>
  </Container>
); //emoji는 span 으로 감싸져야 하고 imgae role이 있어야하며, 접근하기 쉬어야 됨
//시각 장애인들에게 screen reader라는 것이 있는데 내가 screen을 읽으려하면 작동하지 않아서 screen reader에게 말해야됨, 야 loading해 라고
