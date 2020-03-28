import { createGlobalStyle } from "styled-components";
//global style을 하는 이유는 해당사이트의 폰트를 설정하거나 SC를 설치하거나 그런 것들을 하고싶어서임 (global하게)
import reset from "styled-reset";
//npm add styled-reset SC를 이용해서 CSS를 초기화해서 0의 상태에서 시작하게 하는거야

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
        font-size: 12px;
        background-color: rgba(20, 20, 20, 1);
        color: white;
        padding-top: 50px;
    }
`;

export default globalStyles;
//global한 웹사이트에 스타일을 넣어줌
