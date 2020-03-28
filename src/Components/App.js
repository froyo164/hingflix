import React, { Component } from "react"; // React 와 component를 쓰기위해 import
import Router from "Components/Router";
// 이런 형태는 기본적으로 해당 폴더로 가서 index파일을 보게 해줌
// import Header from "Components/Header/Header" index.js 가 없다면 이런 식 으로 해야댐
import GlobalStyles from "Components/GlobalStyles";

class App extends Component {
  //class component, Component 로부터 App 가 확장됨
  // Component의 기능들을 사용할 수 있슴
  // class compononet 는 무조건 render 함수를 리턴해야됨
  render() {
    /*
    React 에는 두 개의 컴포넌트를 return 할 수 없다는 규칙이 있슴, 한개만
    fragment <></>를 사용하며면 원하는 만큼 return 할 수 있게 해줌}
    */
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
