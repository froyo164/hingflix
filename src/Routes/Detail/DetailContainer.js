import React from "react";
import DetailPresenter from "./DetailPresenter.js";
import { tvApi } from "api";
import { moviesApi } from "api";

export default class extends React.Component {
  /*
  state = {
    result: null, //result는, 우리가 show를 찾을 때 id 를 갖고 갈때, id를 가져와서 그걸로 검색하고, 결과 값(result)을 보여줌
    //id 를 가지고 얻게 되는 모든 것들은, 그게 무비든 티비쇼이든 그건 result를 가지게 됨
    error: null,
    loading: true
  }; //state 는 object 이고 component의 data를 넣을 공간이 잇고 이 데이터는 변함
  // 이것이 state를 사용해야 하는 이유
  */
  constructor(props) {
    super(props); // 이 때 props는 이게 {pathname} 이 아님. 이건 {pathname} 존재하지않음
    // 왜냐면 super(props) 이건, 생성자 class 이기 때문
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/show/")
    }; // constructor 생성자를 사용해서 이 것을 class 로 만듬
    /*
    props에서 온 default state를 가지고.(  super(props); const {
      location: { pathname }    ) 이 props 들 말고
    } = props; 
    */
  }
  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
      //location: { pathname }
    } = this.props;
    const { isMovie } = this.state;
    //this.isMovie = pathname.includes("/show/"); //isMovie 를 정의하는 방법
    //console.log(this.props);
    //console.log(id);
    //console.log(this.props); // history를 보기 위해, id가 숫자인지 아닌지 알아 내려고
    //console.log(typeof id);// id 는 string 으로 나옴
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    /* 
    result를 만들었고, null 값이고
    try에서 movie인지 체크해서 true면, movie를 받고, 그 다음에 요청된 데이터를 가지고
    result를 덮어 쓸 것임
    else TV show로 부터 요청되어진 데이터를 가지고 result를 덮어 쓰는 것
    error 가 발생하면 catch 에서 처리하고
    finally {loading: false, result는 null 일 수도 있도 movie 아니면 TV show 일수도 있슴}
    */
    try {
      if (isMovie) {
        ({
          data: result // const= 가 앞에 붙은거랑 같은것임 (위에 result를 선언했기 때문에 const 를 하면 다른 result 가 됨). data 가 result 임
        } = await moviesApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
      //console.log(result);
    } catch {
      this.setState({ error: "Can't find anything" });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    //console.log(this.props);
    //HomePresenter로 바로 가는 모든 state값을 rendering함
    //여기에 presentation(보여주는것) 은 없음, 그냥 HomePresenter component만 있음
    const { result, error, loading } = this.state;
    //console.log(this.state);
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
//1. 우리가 /movie 에 있는지 /show에 있는지 알아내야 됨
//2. 어떤 숫자기ㅏ movie/x ,show/x 에 있는지 알아내댜 됨
/*
DetailContainer.js:13 
{history: {…}, location: {…}, match: {…}, staticContext: undefined}
history: {length: 8, action: "POP", location: {…}, createHref: ƒ, push: ƒ, …}
location: {pathname: "/show/121212", search: "", hash: "", state: undefined}
match: {path: "/show/:id", url: "/show/121212", isExact: true, params: {…}}
staticContext: undefined
__proto__: Object
//리액트 라우터가 파라미터를 각각 다른 장소에게 줌
*/
