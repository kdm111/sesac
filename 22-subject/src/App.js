// import logo from './logo.svg';
import {Bug} from './Bug'
import './App.css';


function App() {
  const name = 'roy'
  const animal = 'poodle'
  const a = 10
  const b = 5
  const msg = 'a는 b보다 큽니다.'
  const title = 'Hello World'
  return (
    <div className='App'>
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
      {/* <div>
        <h3>이것은 div안에 있는 h3태그입니다.</h3>
      </div> */}
      
      {/* <Test /> */}
      {/* <div className='test'>
        {title}
      </div>
      <Input />
      <br />
      <Password /> */}
      <ColorBar 
        height='100px'
        color='red'
      />
      <ColorBar 
        height='150px'
        color='orange'
      />
      <ColorBar
        height='175px'
        color='black'
      >
      </ColorBar>
      <ColorBar 
        height='250px'
        color='green'
      />
      <ColorBar 
        height='300px'
        color='blue'
      />
      <ColorBar 
        height='350px'
        color='navy'
      />
      <ColorBar 
        height='400px'
        color='purple'
      />
    </div>

  );
}
    // {/* 제 반려동물의 이름은 {name}입니다.<br />
    // {name}은 {animal}입니다. */}
    // {/* 3 + 5 == 8은 {3 + 5 === 8 ? '정답입니다.' : '오답입니다.'} */}
    // {/* a = 10 <br />
    // b = 5 <br />
    // {a > b && msg} */}
function Input () {
  return (
    <>
    <label for='id'>아이디 : </label>
    <input type='text' className='inputStyle' name='id' id='id'/>
    </>
  )
}
function Password () {
  return (
    <>
    <label for='password'>비밀번호 : </label>
    <input type='password' className='inputStyle' name='password' id='password'/>
    </>
  )
}
function ColorBar(props) {
  const barStyle = {
    display : 'inline-block',
    position : 'relative',
    backgroundColor : `${props.color}`,
    height : `${props.height}`,
    width : '100px',
    verticalAlign: 'top'
  }
  return (
    <div
      style={barStyle}
    >
      
    </div>
  );
}
export default App;
