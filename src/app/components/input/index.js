"use client";
import { useState } from "react";
import styles from "./index.module.css";

// const [newTask, setNewtask] = useState([])

const Input = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [addtasks, setTasks] = useState([]);

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  function addnewtask() {
    console.log(inputValue);
    const newTasks = [...addtasks];
    newTasks.push(inputValue);
    setTasks(newTasks);
  }

  return (
    <div>
      <div className={styles.addFlex}>
        <input
          onChange={onChange}
          className={styles.inputText}
          placeholder="Add a new task ..."
        />
        <button onClick={addnewtask} className={styles.addBtn}>
          Add
        </button>
      </div>
      <div>
        
        {addtasks.map((addtaskItem) => (
          <div key={addtaskItem}> 
          <input type="checkbox"></input>
          {addtaskItem}</div>
        ))}
      </div>
    </div>
  );
};
export default Input;
