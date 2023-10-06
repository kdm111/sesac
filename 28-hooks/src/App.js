import logo from './logo.svg';
import './App.css';
// import UseMeMoEx from './components/UseMemoEx'
// import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseReducerEx from './components/UseReducerEx';
import userTitle from './components/hooks/userTitle';
import FAQ from './components/FAQ';

function App() {
  // userTitle('reactHook 연습')
  return (
    <div className="App">
      {/* <UseMeMoEx /> */}
      {/* < UseCallbackEx /> */}
      {/* < UseCallbackEx2 
        postId = {1}
      /> */}
      {/* < UseReducerEx /> */}
      <FAQ />
    </div>
  );
}

export default App;
