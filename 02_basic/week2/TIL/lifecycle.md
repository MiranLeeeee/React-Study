
# React_basic
[프론트엔드의 꽃, 리액트](https://spartacodingclub.kr/online/react).

## Week2

### 라이프 사이클
* 가상돔(virtual DOM)
  1. DOM은 html 요소 하나하나를 객체로 생각함
  2. 메모리에 있는 가상 돔을 통해 수정이 필요한 부분만 변경하여 기존 DOM과 비교 후 그 부분만 바꿔줌 -> 간결한 업데이트 과정을 가짐
  3. HTML은 페이지를 진입하거나 데이터가 변경될 때 돔을 구성 -> 렌더링, 리렌더링
  
* 라이프 사이클: 컴포넌트의 생명주기
  1. 컴포넌트가 생성될 때부터 업데이트되고 사라질 때까지의 주기를 의미 -> 렌더링 준비 순간부터 페이지 내에서 사라질 때까지를 의미
  2. 생성 될 때는 컴포넌트를 처음 불러오는 단계로 constructor 생성로 render되고 componentDidmount 과정을 거침
  3. 업데이트할 때는 데이터가 변경될 때 등을 의미하고 render되고 componentDidUpdate 과정을 거침
    - state가 바뀔 때
    - props가 바뀔 때
    - 부모 컴포넌트 업데이트(리렌더링)으로 자식 컴포넌트가 업데이트 될 때
    - forceUpdate()로 강제로 업데이트될 경우
  4. 제거될 때는 componentWillUnmount() 실행됨
    - 이벤트 발생으로 컴포넌트가 사라질 때
    - 페이지를 이동할 경우

 * 라이프 사이클 함수: 클래스형 컴포넌트에서만 사용가능
  1. constructor: 생성자함수로 컴포넌트 생성시 가장 먼저 실행
  2. render: 컴포넌트 모양을 정의 -> return 안 내용은 모양에만 관여할 것
  3. componentDidMount: 컴포넌트 화면 등장 시 딱 한번 마운트됨 (가상돔이 실제 돔으로 올라감)
  4. componentDidUpdate: 업데이트 시 본래데이터와 변경데이터를 둘 다 가지고 있으며 데이터 등이 수정됨
  5. componentWillUnmount: 컴포넌트가 삭제됨
  
 * 리액트에서 돔 요소 추출
  1. React.createRef를 사용
  
    
    constructor(props) {
      ...
      this.text = React.createRef();
    }
    
    componentDidMount() {
      console.log(this.text.current);
    }
    ...
    <input type="text" name="todo" ref={this.text}/>
    
    
 
