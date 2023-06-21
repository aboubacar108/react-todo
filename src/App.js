import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem('savedTodoList')) || '');
  
  React.useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList))
  }, [todoList])

  return [todoList, setTodoList]
};


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

  const [todoList, setTodoList] = useSemiPersistentState('saveTodoList', initialTodoList)

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
    console.log([...todoList,newTodo])
  }
  

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList = {todoList}/>
    </>
  );
}

export default App;
