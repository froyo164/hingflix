import React from "react";
import PropTypes from "prop-types"; //타입 체크를 위해 사용
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
  loading ? (
    <Loader /> //HomePresenter는 항상 load 되어야됨, length 혹은 map에 의해 시작하면 작동을 안함, 왜냐하면 loaded 되지 않았기 떄문에. 두개의 stage로 loading 과 load를 확인해야됨
  ) : (
    <Container>
      {nowPlaying &&
      nowPlaying.length > 0 && ( // 이 둘중 하나의 조건이 false 이면 작동하지 않음, {nowPlaying && nowPlaying.length > 0
          <Section title="Now Playing">
            {nowPlaying.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              />
              /*Network  에 nowplaying*/
            ))}
          </Section>
        )}
      {upcoming &&
      upcoming.length > 0 && ( // 이 둘중 하나의 조건이 false 이면 작동하지 않음, {nowPlaying && nowPlaying.length > 0
          <Section title="Upcoming Movie">
            {upcoming.map(movie => (
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
      {popular &&
      popular.length > 0 && ( // 이 둘중 하나의 조건이 false 이면 작동하지 않음, {nowPlaying && nowPlaying.length > 0
          <Section title="Popular Movies">
            {popular.map(movie => (
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
      {error && <Message color="e74c3c" text={error} />}
      {/*error  가 있을 시에 'error' 를 보여줌, 이 error는 null 아님 text를 보여줄 것*/}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array, // 이게 props 가 되는 것이고 이걸 체크하면 됨
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default HomePresenter;
