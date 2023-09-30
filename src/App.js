import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";
import About from "./MyComponents/About";
import Timer from "./MyComponents/Timer";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("Deleted", todo);
    /* Deleting this way doesn't work
    let index = todos.indexOf(todo);
    todos.splice(index,1);
    */
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

  }

  const addTodo = (title, desc) => {
    let sno = 1;
    if (todos.length > 0)
      sno = todos[todos.length - 1].sno + 1;

    const new_todo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, new_todo]);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="Timer" searchBar={false} />

        <Routes>

          <Route exact path="/" element={<Timer/>} />

          <Route exact path="/add_todo" element={<AddTodo addTodo={addTodo} />} />

          <Route exact path="/todo" element={<Todos todos={todos} onDelete={onDelete} />} />

          <Route exact path="/about" element={<About />} />

        </Routes>


      </Router>
    </>
  );
}

export default App;
