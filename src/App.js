import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


function App() {
  const initialTodoList = [
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

  const [todoList, setTodoList] = React.useState(initialTodoList);
  console.log(todoList)
  
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
    console.log([...todoList,newTodo])
  }
  

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList = {todoList}/>
    </div>
  );
}

export default App;
