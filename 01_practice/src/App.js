import React, { useState } from 'react'
/*JSX값을 리턴하는 함수를 통해 구현
문자열도 HTML도 아닌 형태, JavaSript를 확장한 형태라고 부름
{함수}: 이벤트 처리하는 함수
*/

/*그냥 alert함수만 javaScript를 넣으면 로딩때 바로 랜더링됨
<button onClick={() => alert("hello")}>Submit</button>
*/
function App() {
  /*use State Hook: 클래스 컴포넌트를 작성하지 않아도 됨
  */ 
  //새로운방식: 새로운 state변수를 선언, text에 값을 지정
  const [text, setText] = useState('Hello 3');
  const onSubmit = () => {
    alert("submitted");
  };

  //기존방식: let text = 'Hello 1';

  const updateText = () => {
    //기존방식: document.getElementById('text').innerHTML = text;
    //새로운 방식: setText에 값을 지정
    setText('Hello 4');
    
  };

  return (
    //중괄호로 변수 값을 지정
    //기존방식: <span id="text">{text}</span>
    <div className="App">
      <input/>
      <button onClick={onSubmit}>Submit</button>
    
      <br/><br/>
      
      <span>{text}</span>
      <button onClick={updateText}>Update</button>
    </div>
  );
}

export default App;
