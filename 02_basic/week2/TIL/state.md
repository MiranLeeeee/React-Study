
# React_basic
[프론트엔드의 꽃, 리액트](https://spartacodingclub.kr/online/react).

## Week2

### State 
* 단방향 데이터 흐름: state는 단방향으로 부모 컴포넌트에서 자식 컴포넌트로 흐르는 것을 의미
  1) 부모 컴포넌트가 업데이트되면 자식 컴포넌트도 같이 업데이트되어 리렌더링됨
* 클래스형 컴포넌트에서는 setState() 를 통해 state 관리
  ```
  this.state = {
    age: 50
  };
  
  changeAge= () => {
    this.setState({age: this.state.age+1});
  };  
  ```
* 함수형 컴포넌트는 react hook을 이용하여 state 관리
  
    
 
