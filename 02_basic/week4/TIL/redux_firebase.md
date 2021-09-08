
# React_basic
[프론트엔드의 꽃, 리액트](https://spartacodingclub.kr/online/react).

## Week4

### redux & firebase
* 리덕스에서 firebase 연동 후 데이터 가져오려면 비동기 통신이 필요
* 비동기 통신을 위해 미들웨어를 설치: `yarn add redux-thunk`
* 리덕스에서 데이터 변경이 생기면 액션이 디스패치되고 리듀서에서 처리함
  미들웨어는 그 사이에서 이 작업을 미리 준비해놓음
* 액션 생성함수는 객체를 반환하여 미들웨어는 객체 대신 액션생성함수를 작성하는 함수를 생성 -> 처리가 쉬움
