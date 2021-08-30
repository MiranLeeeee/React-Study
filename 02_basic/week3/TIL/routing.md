
# React_basic
[프론트엔드의 꽃, 리액트](https://spartacodingclub.kr/online/react).

## Week3

### 라우팅
* SPA (Single Page Application): 서버에서 주는 HTML이 1개뿐인 어플리케이션으로 딱 한번만 정적 자원을 받아옴
  1. 사용성 때문에 하나만 주므로 계속 화면을 바꾸는 등 상태유지가 어려움 -> 바꾸지 않은 부분도 초기화됨
  2. 딱 한번 정적자원을 받다보니 처음에 모든 컴포넌트를 받아옴 -> 첫 로딩속도가 느려짐
* 라우팅: 브라우저에서 주소에 따라 다른 페이지를 보여주는 것
  1. 리액트 라우팅 패키지 설치 `yarn add react-router-dom`
* 리액트 라우팅 과정
  1. 필요한 곳에 import (App.js)
    ```
    import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
    ```
  2. 페이지 전환
    ```
    1) index.js
    import {BrowserRouter} from "react-router-dom";
    
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
      ...
     2) 세부 페이지 만들기
     3) App.js: 라우트 적용 
        render() {
          return(
            <div className = "App">
              <Route exact path="/" component={Home}/>
              ....
            </div>
          );
        }
      -> 라우트 적용 시 path에 주소와 component를 넣음
        만약 props가 있다면 render={(props) => (<TodoList list = {this.state.list}/>)}와 같이 추가
    ```
  3. url 파라미터
    - 파라미터 (/students/miran): path로 설정함
      `path="/students/:miran"`
      `{props.match.params.miran}`
    - 쿼리 (/students?name=miran)
  4. Link로 페이지 이동
    ```
    <div>
      <Link to="/students/miran">미란소개</Link>
    </div>
    ```
  5. history로 페이지 전환: withRouter 설정
    ```
    import { withRouter } from "react-router-dom";
    export default withRouter(App);
    ```
    ```
    //히스토리 사용
    <button onClick = {
       () => {
                this.props.history.goBack();
              }
     }
     >뒤로가기</button>
     <button onClick = {
        () => { 
                this.props.history.push("/students/miran");
              }
     }>미란소개페이지로 이동</button>
    ```
     
