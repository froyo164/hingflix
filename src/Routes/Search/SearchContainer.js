import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi } from "../../api";
import { tvApi } from "../../api";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResult: null,
    // 누군가가 검색 시도 했을때, 양쪽 영화, 티비 결과를 둘다 보여주려고 함
    searchTerm: "", //사용자의 검색 값은 string
    loading: false, // default 로 아무것도 로딩 하지 않음(검색을 해야 로딩함)
    error: null
  };

  componentDidMount() {
    //렌더 render() 가 성공적으로 실행되었다면, ComponentDidMount가 실행된다. 그리고 나서 setState 등이 실행되어도 다시 실행되지 않는다.
    this.handleSubmit();
  }

  handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };
  /*
{data: {…}, status: 200, statusText: "", headers: {…}, config: {…}, …}
data: {page: 1, total_results: 431, total_pages: 22, results: Array(20)}
status: 200
statusText: ""
headers: {cache-control: "public, max-age=120", content-type: "application/json;charset=utf-8"}
config: {transformRequest: {…}, transformResponse: {…}, timeout: 0, xsrfCookieName: "XSRF-TOKEN", adapter: ƒ, …}
request: XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
__proto__: Object
*/

  /*
const searchingBy = req.query.term;
const {query: {term = serachingBy} } = req; // 위와 같음
Desctructuring
*/
  searchByTerm = async () => {
    const { searchTerm } = this.state; // 비구조화할당한거에요(객체의 여러 속성값을 변수로 쉽게 할당할수 있슴). 비구조화할당을 사용하지않으면,
    //searchTerm을 사용할 때 this.state.searchTerm으로 접근해야되죠..
    this.setState({ loading: true }); //setState() 는 컴포넌트의 state 객체에 대한 업데이트를 실행, state가 변경 되면 component는 리렌더링 됨
    try {
      const {
        data: { results: movieResults }
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults }
      } = await tvApi.search(searchTerm);
      this.setState({
        movieResults,
        tvResults
      });
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  };
  //handleSubmit 은 searchTermdl 빈칸(공백) 아닌걸 체크하고, 그 다음에 search 함수를 실행 할 것
  render() {
    const { movieResults, tvResult, searchTerm, loading, error } = this.state;

    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResult={tvResult}
        loading={loading}
        error={error}
        searchTerm={searchTerm}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
