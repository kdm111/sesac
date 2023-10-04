
import './App.css';
import HandlerEx from './ex/Handler_ex';
import ChangeSentence from './changeLetter';
import DisappearText from './disappearText';
function App() {
  return (
    <div className="App">
      <HandlerEx />
      <hr />
      <ChangeSentence />
      <hr />
      <DisappearText />
    </div>
  );
}

export default App;
