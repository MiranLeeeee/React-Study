
# React_basic
[프론트엔드의 꽃, 리액트](https://spartacodingclub.kr/online/react).

## Week1

### Component(컴포넌트)
* 클래스형과 함수형이 있음
  1. 클래스형 컴포넌트
    ```
    import React from 'react';
    import TodoList from './TodoList';
    
    class App extends React.Component {
      constructor(props) {
        super(props);
        
        this.state = {
          list: ['밥먹기', '코딩하기']
        };
      }//constuctor end
      render() {
        return (
          <div className="App">
            TodoList
            <TodoList list = {this.state.list}/>
          </div>
        );
      }//render end
    }//class end
    
    export default App;
          
    ```
  3. 함수형 컴포넌트
    ```
    import React from 'react';
    import TodoList from './TodoList';

    function App() {
      return (
        <div classsName="App">
          <h1>Todo List</h1>
        </div>
      );
    }  
    export default App;
    ```
* state: 컴포넌트의 상태 즉, 컴포넌트가 가지고 있는 데이터 
* props: 부모 컴포넌트로부터 받아온 데이터로 수정 및 삭제 등이 불가능
* 함수형 컴포넌트는 state가 없어서 사실 데이터를 넘길 수 없음
* state에 값을 저장후 state의 key를 통해 데이터를 처리
* 자식 컴포넌트는 부모 컴포넌트에서 받은 props에 저장되어있는 state값을 활용
