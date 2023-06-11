import React from 'react';

const TodoListItem = (props) => {
  console.log(props)
  
  return (
    <li>
      <span>{props.item.title}</span>
    </li>
  )
};

export default TodoListItem;