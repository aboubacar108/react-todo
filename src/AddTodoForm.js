import React from 'react';
// import {useState} from 'react';

const AddTodoForm = (props) => {
  const [todoTitle, setTodoTitle] = React.useState('');

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    console.log(newTodoTitle);
    setTodoTitle(newTodoTitle);
  };
    
  const handleAddTodo = (event) => {
    event.preventDefault();
    props.onAddTodo({id: Date.now(), title: todoTitle});
      // clear input values in the form
    setTodoTitle(''); 
  }
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor='todoTitle'>Title: </label>
      <input id='todoTitle' type='text' name='title' value={todoTitle} onChange={handleTitleChange} /> 
      <button>Add</button>
    </form>
  )
};

export default AddTodoForm;