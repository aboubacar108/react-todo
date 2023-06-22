import React from 'react';
import InputWithLabel from './InputWithLabel';

const AddTodoForm = (props) => {
  const [todoTitle, setTodoTitle] = React.useState('');

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
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
      <InputWithLabel
        id='Title'
        value={todoTitle}
        isFocused
        onInputChange={handleTitleChange}
      >
        <strong>Title:</strong>
      </InputWithLabel>
      <button>Add</button>
    </form>
  )
};

export default AddTodoForm;