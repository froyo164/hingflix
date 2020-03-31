import React from "react";
import PropTypes from "prop-types"; //타입 체크를 위해 사용
import styled from "styled-components";

const Container = styled``;

const Form = styled.form``;

const Input = styled.input``;

const SearchPresenter = ({
  movieResults,
  tvResults,
  loading,
  searchTerm,
  handleSubmit,
  error
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      {/*handleSubmit은 searchTerm과 searchs 들을 찾음*/}
      <Input
        placeholder="Search Movies or TV Shows..."
        value="searchTerm" /* value 를 가져야 하는 이유는 input을 제어 할 수있기 때문에*/
      ></Input>
    </Form>
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array, // 이게 props 가 되는 것이고 이걸 체크하면 됨
  tvResults: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired
};

export default SearchPresenter;
