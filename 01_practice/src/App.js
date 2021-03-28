/*JSX값을 리턴하는 함수를 통해 구현
문자열도 HTML도 아닌 형태, JavaSript를 확장한 형태라고 부름
{함수}: 이벤트 처리하는 함수
*/

/*그냥 alert함수만 javaScript를 넣으면 로딩때 바로 랜더링됨
<button onClick={() => alert("hello")}>Submit</button>
*/
function App() {
  
  const onSubmit = () => {
    alert("submitted");
  };

  const onKeyUp = (event) => {
    //event.KeyCode deprecated
    if (event.KeyCode === 13){
      onSubmit();
    }
    //console.log("key up");
  }

  return (
    <div className="App">
      <input onKeyUp ={onKeyUp}/>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default App;
