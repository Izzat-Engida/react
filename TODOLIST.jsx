import React, { useState,useEffect } from "react";

function To_do_list() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    document.body.style.backgroundColor = "black";
    return ()=>{
      document.body.style.backgroundColor = "";
    };
  },[])
  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const taskInput = (event) => {
    event.preventDefault();
    if (task === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const button_style1 = {
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
  const button_style2 = {
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
  const button_style3 = {
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
    setTasks(tasks.filter((_, index1) => index1 !== index));
  };

  const handleUpvote = (index) => {
    if (index>0){
        const temp = [...tasks];
        [temp[index], temp[index-1]] = [temp[index-1], temp[index]];
        setTasks(temp);
    }
   
    
  };

  const handleDownvote = (index) => {
    if (index<tasks.length-1){
        const temp = [...tasks];
        [temp[index-1], temp[index]] = [temp[index], temp[index-1]];
        setTasks(temp);
    }
  };

 

  return (
    <div style={{ backgroundColor: "gray" }}>
      <div>
        <h1 style={{ fontSize: "4rem", color: "white" }}>To-Do-List</h1>
        <form onSubmit={taskInput}>
          <input
            style={{
              fontSize: "1.6rem",
              padding: "10px",
              border: "2px solid hsl(0,0%,80%,0.5)",
              borderRadius: "5px",
              color: "hsl(0,0%,0%,0.5)",
            }}
            value={task}
            type="text"
            id="task"
            onChange={handleChange}
          />
          <button style={button_style1} type="submit">
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
              backgroundColor: "hsl(0,0%,97%)",
              marginBottom: "10px",
              border: "3px solid hsl(0,0%,85%,0.75)",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ flex: "1" }}>
              {task}
            </span>
            <button style={button_style2} onClick={() => handleRemoval(index)}>
              Delete
            </button>
            |
            <button style={button_style3} onClick={() => handleUpvote(index)}>
              ☝️
            </button>
            |
            <button style={button_style3} onClick={() => handleDownvote(index)}>
              👇
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default To_do_list;
