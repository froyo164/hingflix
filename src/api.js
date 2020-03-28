// fetch, 원격 저장소의 데이터를 로컬에 가져오기만 하기

// https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1
// 여기서 (url) 중복 되는 부분들 을 생략 하기 위해 만듦 (효과 적으로 쓰기 위해)
// Axios는 HTTP통신을 하는데 매우 인기있는 Javascript라이브러리
// npm add axios, axios 는 request 랑 작업하기 좋음, 우리가 axios 의 인스턴스를 configure(설정) 해줄 수 있다는 것

/*
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
// 그 설정을 여기서 해줄 수 있슴, baseURL, headers, timeout 같은 것들을 여러 곳에서 반복해서 작성해 줄 필요가 없음
*/

//dom 객체, axios 객체??

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "febf4c180a6ff0188b51a46bc3972fb4",
    language: "en-US"
  } //이제 우리가 하는 모든 작업들은, 여기 URL, api_key, language를 가지고 함
});

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos"
      } // router, parameter 들을 개별적으로 설정하는 방식
    }),
  search: term =>
    api.get("search/movie", {
      params: {
        //query: term
        query: encodeURIComponent(term) // 어떤 파라미터 값을 여기 넘기 던지, 그 값을 인코딩하고 그 문자열로 검색을 함
      }
      // query에 qwerss!@#$ 를 넣었을 경우 아래와 같이 나옴,
      // https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=QWERSS%21%40%23%24&page=1&include_adult=false
      // Pass a text query to search. This value should be URI encoded. (URI 인코딩이 되어야함)
    })
};
//append_to_reponse 를 사용해서 가져올수 있는 것들은, video(예고편) 나 image(포스터) 같은 것들을 append(덧붙이기), 결과 값으로 id, key, 유튜브 예고편, ... 모든것을 줌

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: id => api.get(`tv/${id}`),
  search: term =>
    api.get("search/tv", {
      params: {
        //query: term
        query: encodeURIComponent(term) // 어떤 파라미터 값을 여기 넘기 던지, 그 값을 인코딩하고 그 문자열로 검색을 함
      }
      // query에 qwerss!@#$ 를 넣었을 경우 아래와 같이 나옴,
      // https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=QWERSS%21%40%23%24&page=1&include_adult=false
      // Pass a text query to search. This value should be URI encoded. (URI 인코딩이 되어야함)
    })
};
//api.get("tv/popular"); // /tv/popular 는 절대경로(baseURL 에 덮어쓰기를 함), 이경우에는 상대경로를 써야 됨
// 이렇게 하면 api 는 tv/popular 를 가지고 baseURL 밑 params 등 모든 것을 가져옴
// https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1

//export default api; // instance를 test 하기위에 export, index 파일에 API 를 import 함
