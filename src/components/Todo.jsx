import React from "react";

import { Card, CardContent, Container, IconButton, Typography } from "@mui/material";
import { Check, Delete } from "@mui/icons-material";

const Todo = ({ title, CheckTodo, id, isCompleted, deleteTodo }) => {
  const markComplete = () => CheckTodo(id);
  const delTodo = () => deleteTodo(id);
  const todoStyle = isCompleted
    ? { textDecoration: "line-through" }
    : { textDecoration: "none" };
  return (
    <div>
      <Container>
        <Card
          variant="outlined"
          style={{ marginTop: 35, background: "lightgray" }}
        >
          <CardContent>
            {/* Chek icon */}
            <Typography variant="h5" component="h2" style={todoStyle}>
              <IconButton onClick={markComplete}>
                <Check style={{ color: "green" }} />
              </IconButton>
              {title}
              <IconButton style={{ float: "right" }} onClick={delTodo}>
                <Delete style={{ color: "red" }} />
              </IconButton>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Todo;
