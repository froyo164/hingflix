// Section은 예를들면 upcoming movies 섹션안에 관련 영화들.. popular movies 섹션 안에 영화들.. 섹션 안에 관련 컨텐츠 이런걸 뜻함
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.span`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 25px;
`;

const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 25px;
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);
// children 은 react prop 예약된 react prop
// react 에서 children 은 일반적으로 movie 에서 movie 처럼 태그 사이의 값을 받음
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Section;
