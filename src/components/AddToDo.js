import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

const AddToDo = ({ addTodoHandler }) => {
  const [todo, setTodo] = useState({
    task: "",
    des: "",
  });

  const add = (e) => {
    e.preventDefault();
    if (todo.task === "" || todo.des === "") {
      alert("All fields are mandatory!");
      return;
    }
    setTodo({ task: "", des: "" });
    addTodoHandler(todo);
  };

  return (
    <div>
      <form onSubmit={add}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h4" gutterBottom>
            Add ToDo
          </Typography>
          <TextField
            className="m-bottom"
            id="standard-basic"
            label="Task Name"
            variant="outlined"
            value={todo.task}
            onChange={(e) => setTodo({ ...todo, task: e.target.value })}
          />
          <TextField
            className="m-bottom"
            id="standard-basic"
            label="Short Description"
            variant="outlined"
            multiline
            maxRows={4}
            value={todo.des}
            onChange={(e) => setTodo({ ...todo, des: e.target.value })}
          />
          {/* <input type="text" name="task" value={todo.task} onChange={(e) => setTodo({...todo, task: e.target.value})}/>
          <input type="text" name="des" value={todo.des} onChange={(e) => setTodo({...todo, des: e.target.value})}/> */}
          {/* <button>add</button> */}
          <Button
            className="btn-success m-bottom"
            variant="contained"
            color="success"
            size="large"
            type="submit"
          >
            ADD
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddToDo;
