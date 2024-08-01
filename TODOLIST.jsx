import React, { useState, useEffect } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    document.body.style.backgroundColor = "black";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const taskInput = (event) => {
    event.preventDefault();
    if (task === "") return;
    setTasks([...tasks, { name: task }]);
    setTask("");
  };

  const buttonStyle1 = {
    color: "white",
    backgroundColor: "green",
    fontSize: "1.7rem",
    fontWeight: "bold",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const buttonStyle2 = {
    color: "white",
    backgroundColor: "red",
    fontSize: "1.7rem",
    fontWeight: "bold",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const buttonStyle3 = {
    color: "yellow",
    backgroundColor: "lightblue",
    fontSize: "1.7rem",
    fontWeight: "bold",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const handleRemoval = (index) => {
    setTasks(tasks.filter((_, idx) => idx !== index));
  };

  const handleUpvote = (index) => {
    if (index > 0) {
      const temp = [...tasks];
      [temp[index], temp[index - 1]] = [temp[index - 1], temp[index]];
      setTasks(temp);
    }
  };

  const handleDownvote = (index) => {
    if (index < tasks.length - 1) {
      const temp = [...tasks];
      [temp[index], temp[index + 1]] = [temp[index + 1], temp[index]];
      setTasks(temp);
    }
  };

  return (
    <div style={{ backgroundColor: "gray", padding: "20px" }}>
      <div>
        <h1 style={{ fontSize: "4rem", color: "white" }}>To-Do List</h1>
        <form onSubmit={taskInput}>
          <input
            style={{
              fontSize: "1.6rem",
              padding: "10px",
              border: "2px solid rgba(0,0,0,0.5)",
              borderRadius: "5px",
              color: "rgba(0,0,0,0.5)",
            }}
            value={task}
            type="text"
            id="task"
            onChange={handleChange}
          />
          <button style={buttonStyle1} type="submit">
            Add
          </button>
        </form>
      </div>
      <div>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              padding: "10px",
              backgroundColor: "rgba(255,255,255,0.97)",
              marginBottom:
