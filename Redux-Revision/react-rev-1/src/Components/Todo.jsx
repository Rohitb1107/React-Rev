import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/Features/Todo/action";
import axios from "axios";

const Todo = () => {
  const [text, setText] = useState("");
  // const [todoList, setTodoList] = useState([]);

  const todo = useSelector((store) => {
    return store.todo.todo;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    getTodo();
  }, []);

  const addTask = () => {
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

  const getTodo = () => {
    axios
      .get("http://localhost:8080/todos")
      .then((res) => {
        dispatch(addTodo(res.data));
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

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
          addTask();
          // console.log(text);
        }}
      >
        Add
      </button>

      {todo.map((e,i) => {
        return (
          <div key={i}>
            <div>
              <span>{`${i}:`}</span> {e.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
