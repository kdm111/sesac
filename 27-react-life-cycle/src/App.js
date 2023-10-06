import './App.css';
import RefSample1 from './RefSample1';
import RefSample2 from './RefSample2';
import RefSample3 from './RefSample3';
import RefSample4 from './RefSample4';

function App() {
  return (
    <div className="App">
      {/* 대개 현업에서는 DOM 요소에 접근할 때 사용한다. */}
      {/* 함수형 컴포넌트에서 useRef로 DOM요소에 직접 접근 */}
      < RefSample1 />
      {/* 함수형 컴포넌트에서 useRef로 로컬변수 사용 */}
      < RefSample2 />
      {/* 클래스형 컴포넌트에서 ref 사용방법 callback 함수 */}
      < RefSample3 />
      {/* 클래스형 컴포넌트에서 ref 사용방법 createRef */}
      < RefSample4 />
    </div>
  );
}

export default App;
