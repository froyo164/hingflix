import React from "react"; //React 는 view를 만들기 위한 라이브러리
import ReactDOM from "react-dom"; //ReactDom 은 UI 를 실제로 브라우저에 렌더링 할 떄 사용하는 라이브러리
// 결국 둘다 필요
import App from "Components/App";
// import "./api"; //text 하기 위해

ReactDOM.render(<App />, document.getElementById("root"));
