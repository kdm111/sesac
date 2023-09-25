import './App.css';
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';
import Button from './Button';

function App() {
  return (
    <div className="App">
      {/* <FunctionComponent 
        name={true}
      />
      <hr />
      <ClassComponent 
        name={true}
        color='name'
      /> */}
      <Button 
        children='google'  
      />
    </div>
  );
}

export default App;
