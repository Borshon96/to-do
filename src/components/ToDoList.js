import { List, Typography } from "@mui/material";
import React from "react";
// import IconButton from "@mui/material/IconButton";
// import DeleteIcon from "@mui/icons-material/Delete";
import ToDoCard from "./ToDoCard";

const ToDoList = (props) => {
  // console.log(props);

  const deleteTodoHandler = (id) => {
    props.getTodoId(id);
  };

  const renderToDoList = props.todos.map((todo) => {
    return (
      <ToDoCard todo={todo} clickHandler={deleteTodoHandler}></ToDoCard>
    );
  });
  return (
    <div>
      <Typography variant="h4" gutterBottom className="m-top-l">
        ToDo List
      </Typography>
      <List style={{display: "flex", flexDirection: "column-reverse"}}>{renderToDoList}</List>
    </div>
  );
};

export default ToDoList;
