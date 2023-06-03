import React from 'react';

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
    id: 1,
    title: "Process and analyze data"
  }
];

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((item) => {
          return(
            <li key={item.id}>
              <span>{item.title}</span>
            </li>
          )
        })}
      
      </ul>
    </div>
  );
}

export default App;
