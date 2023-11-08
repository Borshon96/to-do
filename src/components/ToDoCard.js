import React from "react";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import TaskIcon from "@mui/icons-material/Task";

const ToDoCard = (props) => {
  const { id, task, des } = props.todo;
  return (
    <div className="list m-bottom">
      <div style={{ display: "flex" }}>
        <TaskIcon
          color="secondary"
          fontSize="large"
          style={{ marginTop: "4px" }}
        />
        <div style={{ marginLeft: "1rem" }}>
          <Typography variant="h6" gutterBottom>
            {task}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {des}
          </Typography>
        </div>
      </div>
      <IconButton
        aria-label="delete"
        size="large"
        className="delete-btn"
        style={{ marginTop: "8px" }}
        onClick={()=> props.clickHandler(id)}
      >
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
};

export default ToDoCard;
