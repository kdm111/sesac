// import Counter from './Counter'
import CounterFn from './CounterFn';
import './App.css';
import Counter2 from './Counter2';

function App() {
  return (
    <div className="App">
      <CounterFn />
      <hr />
      <Counter2 
        value='+1'
      />
    </div>
  );
}

export default App;
