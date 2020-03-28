import React from "react";
import HomePresenter from "./HomePresenter.js";
import { moviesApi } from "../../api.js";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null, //error 발생 가능
    loading: true //default 값이 true
  }; //state 는 object 이고 component의 data를 넣을 공간이 잇고 이 데이터는 변함
  // 이것이 state를 사용해야 하는 이유

  async componentDidMount() {
    // component를 만들고, 첫 rendering을 다 마친후 실행
    try {
      //try 하고, 뭔가 작동하지 않으면, error를 catch, 뭐가 발생하든, 끝에는 finally
      // async await, componentDidMount가 async 가 되어야 됨, wait를 원함, wait for me util I finished something
      const nowPlaying = await moviesApi.nowPlaying(); //성공하든 실패하든 일단 끝날 떄 까지 기다림
      console.log(nowPlaying);
    } catch {
      //catch는 error 메세지가 따라오지만 일단은 error 상태 값만 변경해 줌
      this.setState({
        error: "Can't find movies information"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  } // 두가지 옵션, 1. 전체 API 요청을 여기서 할 수 있고, 2. 각각의 요청을 분리된 함수로 만들어서 따로 요청할 수 있슴
  // ex) getNowPlaying(), getUpcoming(), getPoplular()
  // 우리의 경우에는, 이게 매우 크지 않기 때문에 componentDidMount() 안에서 할 것
  render() {
    //HomePresenter로 바로 가는 모든 state값을 rendering함
    //여기에 presentation(보여주는것) 은 없음, 그냥 HomePresenter component만 있음
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
