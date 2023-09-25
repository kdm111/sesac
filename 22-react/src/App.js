import logo from './logo.svg';
import './App.css';

function App() {
  // <div /> : react 
  //  <> : 빈 태그. 감싸야 하는 용도로만 사용할 경우 <>를 사용
  const name = 'js';
  const student = '!sesac';
  const h2Style = {
    color : 'darkblue',
    backgroundColor : 'skyblue'
  };
  return (
    <div className="App">
      {/* 자동 생성 코드 */}
    
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* jsx 문법 사용 */}
      {/* 하나로 감싸인 요소 */}
      <>
        {/* 인라인 스타일 적용은 카멜케이스를 사용한다. */}
        <h1 style={{backgroundColor : 'ghostwhite', color : 'gray'}}>하나로 감싸인 요소</h1>
        {/* js 문법 사용 */}
        {/*{}로 js 표현식이 사용가능하다. if, for는 사용이 불가능하고 삼항 연산자 사용가능 */}
        {/* 리턴 밖에서 if와 for문을 사용해야 된다. */}
        <div>{name} 안녕!</div>
        <div>{student === 'sesac' ? (<span>새싹인</span>) : (<span>새싹인이 아님</span>)}</div>
        {/* 
          3. style
            - 리액트에서 dom 요소에 스타일 적용시 (문자열 X -> 객체 O)
            - 스타일 이름 중 하이픈은 camelCase로 적용
        */}
        <h2 style={h2Style}>스타일 적용</h2>
        {/* 
          4. className
            - class 속성이아닌 className 속성 사용
            - onclick이 아닌 onClick 사용
        */}
        {/* 
          4. closingTag === self-closing
            - input 처럼 닫는 태그가 없는 태그 역시 닫는 태그가 필요하다. 
        */}
        <input type='text' placeholder='닫는 태그' />
      </>
    </div>
  );
}

export default App;
