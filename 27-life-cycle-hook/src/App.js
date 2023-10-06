import './App.css';
import React, {useEffect} from 'react'
import LifeCycleFunc from './LifeCycleFunc';
import LifeCycleClass from './LifeCycleClass';
import Subject from './Subject';

function App() {
  useEffect(() => {
    console.log("app mount")
  }, [])
  return (
    <div className="App">
      {/* <LifeCycleFunc /> */}
      {/* < LifeCycleClass /> */}
      <Subject />
    </div>
  );
}

export default App;
