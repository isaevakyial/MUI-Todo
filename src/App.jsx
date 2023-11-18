import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Play",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Play Cricked",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Play Chess",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Code Hello World !",
      isCompleted: false,
    },
  ]);

  const CheckTodo = (id) => {
    console.log(id);
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.isCompleted = !todo.isCompleted;
        console.log(todo.isCompleted);
        return todo;
      })
    );
  };

  const deleteTodo=(id)=>{
    setTodos(todos.filter(todo => todo.id !==id))
  }

  //   add a todo
  const addTodo = (text) => {
    const newTodo = {
      id: 5,
      title: text,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };
  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} CheckTodo={CheckTodo}  deleteTodo ={deleteTodo}/>
    </div>
  );
}

export default App;
