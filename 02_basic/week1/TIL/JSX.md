
# React_basic
[프론트엔드의 꽃, 리액트](https://spartacodingclub.kr/online/react).

## Week1

### JSX
* 정의: HTML in JS
* Single Page Application(SPA): 함수형 컴포넌트를 활용해 하나의 페이지에 필요한 것을 쌓아 만든 어플리케이션
    - 리액트는 단 하나의 html파일만 존재
    - 뷰를 그리기 위해 JSX문법을 통해 js에 리액트 요소를 만들어서 DOM에 렌더링
    - HTML 요소까지는 아니고 리액트 요소라고 칭함
* 문법
    - 태그는 꼭 종료해야함, 종료태그가 없는 경우 종료되었음을 /로 명시
    - 무조건 1개의 요소만 반환함, App function 등에 리턴을 하나의 태그로 감싸줌
    - JSX에서 javascript값을 가져오기 위해 {}로 불러옴
    - 인라인으로 style을 주는 것도 가능  `<span stype = {{color: 'orange'}}></span>`
    - class 대신 className으로 설정
