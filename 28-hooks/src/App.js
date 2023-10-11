import logo from './logo.svg';
import './App.css';
// import UseMeMoEx from './components/UseMemoEx'
// import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseReducerEx from './components/UseReducerEx';
import useTitle from './components/hooks/useTitle';
import FAQ from './components/FAQ';

function App() {
  useTitle('reactHook 연습')
  // customHook은 자체 개발 할 일은 많이 없지만 
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
