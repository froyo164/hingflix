import React from "react";
import DetailPresenter from "./DetailPresenter.js";

export default class extends React.Component {
  state = {
    result: null, //result는, 우리가 show를 찾을 때 id 를 갖고 갈때, id를 가져와서 그걸로 검색하고, 결과 값(result)을 보여줌
    //id 를 가지고 얻게 되는 모든 것들은, 그게 무비든 티비쇼이든 그건 result를 가지게 됨
    error: null,
    loading: true
  }; //state 는 object 이고 component의 data를 넣을 공간이 잇고 이 데이터는 변함
  // 이것이 state를 사용해야 하는 이유
  render() {
    //HomePresenter로 바로 가는 모든 state값을 rendering함
    //여기에 presentation(보여주는것) 은 없음, 그냥 HomePresenter component만 있음
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
