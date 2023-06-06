import React from 'react';
// import {useState} from 'react';

const AddTodoForm = (props) => {
  const [todoTitle, setTodoTitle] = React.useState('');
  const handleAddTodo = (event) => {
    event.preventDefault();
    console.log(todoTitle);

    // clear input values in the form
    setTodoTitle(''); 

    props.onAddTodo(todoTitle);
  }
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor='todoTitle'>Title: </label>
      <input id='todoTitle' type='text' name='title' value={todoTitle} onChange={event => setTodoTitle(event.target.value)} /> 
      <button>Add</button>
    </form>
  )
};

export default AddTodoForm;