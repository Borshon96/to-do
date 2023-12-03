import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";
import { Container } from "@mui/material";
import { v4 as uuid } from "uuid";

function App() {
  const LOCAL_STORAGE_KEY = "todos";
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todo) => {
    console.log(uuid());
    console.log(todo);
    setTodos([...todos, { id: uuid(), ...todo }]);
  };

  const reomveTodoHandler = (id) => {
    const newTodoList = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodoList);
  };

  useEffect(() => {
    const retriveTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveTodos) setTodos(retriveTodos);
  }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  // },[todos]);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, 0);
  }, [todos])

  return (
    <Container>
      <Header />
      <AddToDo addTodoHandler={addTodoHandler} />
      <ToDoList todos={todos} getTodoId={reomveTodoHandler} />
    </Container>
  );
}

export default App;
