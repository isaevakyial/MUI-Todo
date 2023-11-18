import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, CheckTodo,deleteTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          CheckTodo={CheckTodo}
          id={todo.id}
          isCompleted={todo.isCompleted}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
