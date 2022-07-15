import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/Features/Todo/action";
import axios from "axios";

const Todo = () => {
  const [text, setText] = useState("");
  // const [add, setAdd] = useState("");

  // const todo = useSelector((store) => {
  //   return store.todo.todo;
  // });

  const dispatch = useDispatch();

  const addTodo = () => {
    axios
      .post("http://localhost:8080/todos", {
        title: text,
        status: false,
      })
      .then(() => {
        alert("Task added successfully");
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  // useEffect(() => {
  //   addTodo();
  // }, []);

  return (
    <div>
      <h1>Todo App</h1>

      <input
        type="text"
        name="addTask"
        placeholder="Enter task"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addTodo();
          // console.log(text);
        }}
      >
        Add
      </button>

      {/* {text.map((e, i) => {
        return <div key={i}>{e.title}</div>;
      })} */}
    </div>
  );
};

export default Todo;
