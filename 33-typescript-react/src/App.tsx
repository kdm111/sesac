import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
import Card from './components/Card';
import TodoList from './components/TodoList';

function App() {
  const handleClick = (name:string, grade:number) => {
    console.log(`안녕 ${name}! 나는 ${grade}이야.`)
  }
  return (
    <div className="App">
      <Student 
        name="hello"
        grade={3}
        part='반장'
        handleClick={handleClick}
      />
      <Card
        title="오늘 배울 것은?"
      >
        <p>카드</p>
      </Card>
      <TodoList />
    </div>
  );
}

export default App;
