import React from "react";
import { Link, withRouter } from "react-router-dom"; //withRouter는 다른 컴포넌트를 감싸는 컴포넌트 and Router 에게 정보를 줌
//import "./Header.css";
//import styles from "./Header.module.css"; // 자바스크립트 import 하는 것 처럼 바꿈
//import styles from "./Header.module.scss"; //SCSS
import styled from "styled-components"; //npm add styled-components, style이 안에 있는 컴포넌트를 생성할 수 있슴

//npm add styled-reset SC를 이용해서 CSS를 초기화해서 0의 상태에서 시작하게 하는것

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
  /*
  &:hover {
    background-color: blue;
  }
  */
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 5px solid
    ${props => (props.current ? "#3498db" : "transparent")}; /* 해당 location 에 있을 때 색이 생김, current 값이 true 인지*/
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
//react-router-dom 에서 주어진 link
//이 Link 는 해당 페이지가 내 어플리케이션에 있으면 그 곳으로 브라우져한 방식으로 가지않고 JS 의 방식으로 가게해줌
//href 는 react-router 에는 존재하지않음 to=""

//stlyed components 사용법, JS 안에 CSS 가 있고 컴포넌트를 바꾸면 됨 ( `` 백틱 주의)

//파일들을 폴더에 넣어서 컴포넌트를 만들고 그 폴더에 CSS파일도 만들어서 import 하는 것
//이 방법은, 파일을 생성해야 되고, 사용 할 때 마다 import를 해야되고, className 을 기억해 둬야 됨 (반복되지 않게)
//문제는 지금 CSS는 global 하게 작동 됨, 우리는 global 한 CSS를 원하지 않음
//Header 폴더, Header.js, index.js, Header.css

//npm add styled-components

export default withRouter(({ location: { pathname } }) => (
  //withRouter 추가

  //선언한 함수 내보내기
  //export 는 외부 Component에서 해당 클래스를 사용할 수 있게 해줌(선언)
  <Header>
    {/*console.log(props) html 에서 JS 사용 시 {} 안에 사용*/}
    {/*location 의 값이 필요하기 때문에 확인하기위에, props.location.pathname*/}
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));

// current={true} Location aware header

/*
위와 같음
//Header가 withRouter 라는 컴포넌트를 감싼 형태이기 때문에 props 를 가질 수 있음
const Header = props => (
  <Header>
    <List>
      <Item current={true}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={true}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={true}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
);

export default withRouter(Header); //withRouter 덕에 어떤 컴포넌트와도 연결할 수 있음

*/

//API Key (v3 auth): febf4c180a6ff0188b51a46bc3972fb4
