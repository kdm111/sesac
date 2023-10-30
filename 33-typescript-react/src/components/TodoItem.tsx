import React from 'react';
import { ToDoItem } from '../types/types';

// {todo} => {todo: {id, text, completed}}
interface Props {
  todo: ToDoItem;
	check: (id : ToDoItem) =>void;
}

export default function TodoItem({ todo, check }: Props) {
  return (
    <li>
      <label>
        <input 
					type="checkbox" 
					defaultChecked={todo.isCompleted} 
					onChange={() => {
						check(todo)
					}}
				/>
        {todo.text}
      </label>
    </li>
  );
}