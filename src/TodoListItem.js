import React from 'react';

const TodoListItem = ({item, onRemoveTodo}) => (
    <li>
      <span>{item.title}</span>
      <button type='button' onClick={() => onRemoveTodo(item)}>
        Remove
      </button>
    </li>
);


export default TodoListItem;