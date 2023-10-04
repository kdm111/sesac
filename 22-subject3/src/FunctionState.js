import {useState} from 'react'

const FunctionState = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h3>Function Number: {number}</h3>
      <button
        onClick={function increase () {
          setNumber(number + 1)
        }}
      >+1</button>
      <button
        onClick={() => {
          this.setState({number : number - 2})
        }}
      >-2</button>
    </div>
  );
}

export default FunctionState;
