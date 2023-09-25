import logo from './logo.svg';
import './App.css';
import Test from './Test.js'
import Test2 from './Test2.js'
import FoodComponent from './FoodComponent.js'
import BookComponent from './BookComponent';
import ClassComponent from './ClassComponent';

function App() {
  return (
    <div className="App">
      {/* < Test />
      < Test2 /> */}
      <FoodComponent 
        food={1}
      /> 
      <BookComponent
        title='강아지와 행복하게 사는 방법'
        author='홍길동'
        price={20000}
        type='자기계발서'
      />
      <ClassComponent 
        text='App 컴포넌트에서 넘겨준 props입니다.'
        valid={true}
      />
    </div>
  );
}

export default App;
