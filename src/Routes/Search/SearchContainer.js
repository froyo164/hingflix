import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResult: null,
    // 누군가가 검색 시도 했을때, 양쪽 영화, 티비 결과를 둘다 보여주려고 함
    searchTerm: "", //사용자의 검색 값은 string
    loading: false, // default 로 아무것도 로딩 하지 않음(검색을 해야 로딩함)
    error: null
  };
  render() {
    const { movieResults, tvResult, searchTerm, loading, error } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResult={tvResult}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
      />
    );
  }
}
