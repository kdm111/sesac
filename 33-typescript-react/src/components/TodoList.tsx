import React, { useState, useRef } from 'react';
import { ToDoItem } from '../types/types';
import TodoItem from './TodoItem';

export default function TodoList() {
  const [todos, setTodos] = useState<ToDoItem[]>([]); // 전체 투두 목록
  const [newTodo, setNewTodo] = useState<string>(''); // 새로 추가될 투두 하나
  const inputRef = useRef<HTMLInputElement>(null);
  const check = (todo: ToDoItem):void => {
    setTodos((data) => {
      return data.map((el) => {
        if (el.id !== todo.id) {
          return el;
        } else {
          return {...el, isCompleted : !el.isCompleted};
        };
      });
    });
  };
  const addTodo = () => {
    const updatedTodos = [
      ...todos,
      { id: Date.now(), text: newTodo, isCompleted: false },
    ];
    setTodos(updatedTodos); // 전체 투두에 새로운 투두 추가
    setNewTodo(''); // input 초기화
  };
  const focusInput = ():void => {
    inputRef.current?.focus()
  }
  const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e):void => setNewTodo(e.target.value)}
          placeholder="add new todo!"
          ref={inputRef}
          onKeyDown={(e):void => {
            handleKeyDown(e)
          }}
        />
        <button onClick={addTodo}>ADD</button>
        <button onClick={focusInput}>FOCUS</button>

      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            check={check}
          />
        ))}
      </ul>
    </div>
  );
}