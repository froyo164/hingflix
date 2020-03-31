import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom"; //BrowserRouter
//import {HashRouter as Router , Route} from "react-router-dom";
//HastRouter를 사용하기 위해 (여러 router 들 중 하나)
//HashRouter as Router 와  Route 를 import (사용하기 위해 from react-router-dom 에서)

import Home from "Routes/Home";
import TV from "Routes/TV";
import Header from "Components/Header";
import Search from "Routes/Search";
import Detail from "Routes/Detail";
// 페이지들을 연결 하기 위에 Router.js 에 import

export default () => (
  <Router>
    {/*Router를 쓸 수 있게 함*/}
    <>
      <Header />
      <Switch>
        {/*Switch는 한 번에 오직 하나의 Router만 render하게 해줌, 한번에 두개이상의 Router는 render할 수 없음}
      {/*Router는 하나의 child element 만 가질 수 있슴*/}
        <Route path="/" exact component={Home} />
        {/*Route도 import 되서 Route 도 쓸 수있슴
            exact는 정확히 여기서 해야하다는 것 
            "/" 뒤에 뭐가 들어와도 일치 댐
            component는 누군 가 이 Route에
            왔을 때 어떤 컴포넌트가 보여질 건 지에 대한것*/}
        <Route path="/tv" component={TV} />
        <Route path="/tv/popular" render={() => <h1>Popular</h1>} />
        {/* TV 와 TV 에 popular 를 동시에 render함*/}
        <Route path="/search" component={Search} />
        <Route path="/movie/:id" component={Detail} /> {/*for movie*/}
        {/*:id 에는 무엇이든주 올 수 있씀*/}
        <Route path="/show/:id" component={Detail} /> {/*for show*/}
        <Redirect from="*" to="/" />
        {/*일치하는 Route가 하나도 없다면 어느페이지든 받아서 "/" 로 보내줌*/}
      </Switch>
    </>
  </Router>
);
//default로 Router가 route 들에게 정보를 줌
