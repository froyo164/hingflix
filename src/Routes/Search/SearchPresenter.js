import React from "react";
import PropTypes from "prop-types"; //타입 체크를 위해 사용
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

//import { moviesApi } from "../../api";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  loading,
  searchTerm,
  handleSubmit,
  error,
  updateTerm
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      {/*handleSubmit은 searchTerm과 searchs 들을 찾음*/}
      <Input
        placeholder="Search Movies or TV Shows..."
        value={searchTerm}
        onChange={
          updateTerm
        } /* value 를 가져야 하는 이유는 input을 제어 할 수있기 때문에, 추적해야할 필요가 있음, 값을 자바스크립으로 얻기 위해 state에 searchTerm 이 잇음*/
        /* enter의 기본값은 submit, browser가 submit 하면 page를 새로 고침해버리고, 내 state를 읽어버리게 됨. 그래서 해당 이벤트를 가로채야됨*/
        /* input에서 update에 관한 value값이 있는 function 을 만들어야 됨 */
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map(movie => (
              //<span key={movie.id}>{movie.title}</span>
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Shows Results">
            {tvResults.map(show => (
              //<span key={show.id}>{show.name}</span>
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_title}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
      </>
    )}
    {error && <Message color="e74c3c" text={error} />}
    {tvResults &&
      movieResults &&
      tvResults.length === 0 &&
      movieResults.length === 0 && (
        <Message text="Nothing found" color="#95a5a6" />
      )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array, // 이게 props 가 되는 것이고 이걸 체크하면 됨
  tvResults: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;
