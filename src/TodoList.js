import React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [
  {
    id: 1,
    title: "Understand business objective"
  },
  {
    id: 2,
    title: "Collect relevant data"
  },
  {
    id: 3,
    title: "Process and analyze data"
  }
];

const TodoList = () => {
  return(
    <ul>
        {todoList.map((item) => {
          return(
            <TodoListItem key={item.id} item={item} />
          )
        })}
      
    </ul>
  );
};

export default TodoList;
