"use client";
import { useState } from "react";
import styles from "./index.module.css";

// const [newTask, setNewtask] = useState([])

const inputValue = {
  text: "",
  completed: false,
};

const Input = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [addtasks, setTasks] = useState([]);

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  function addnewtask() {
    console.log(inputValue);
    // const newTasks = [...addtasks];
    // newTasks.push(inputValue);        // 1 bichiglel

    const newTasks = [inputValue, ...addtasks]; // 2 bichiglel buyu pushlegdej bga auvomat
    setTasks(newTasks);
  }

  function deleteText(id) {
    console.log(inputValue);
    const newTasks = [...addtasks];
    newTasks.push(inputValue);
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
        {addtasks.map((addtaskItem, index) => (
          <div className={styles.TaskFlex} key={addtaskItem}>
            <div className={styles.addText}>
              <input type="checkbox"></input>
              <p>{addtaskItem}</p>
            </div>
            <div>
              <button
                className={styles.changeBtn}
                style={{
                  backgroundColor: "var(--edtbck)",
                  color: "var(--edttxt)",
                }}
              >
                Edit
              </button>
              <button
                onClick={() => deleteText(id)}
                className={styles.changeBtn}
                style={{
                  backgroundColor: "var(--delbck)",
                  color: "var(--deltxt)",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Input;
