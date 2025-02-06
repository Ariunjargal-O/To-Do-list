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

function editTask () {
  const editTask = addnewtask ("")
  const newTasks = [...addtasks];
  newTasks[index].text = editTask ;
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
        {addtasks.map((addtaskItem, index) => (
          <div className={styles.taskFlex} key={addtaskItem}>
            <div className={styles.addFlex}>
              <input type="checkbox"></input>
              <p className={styles.addText}>{addtaskItem}</p>
            </div>
            <div className={styles.addFlex}>
              <button
              onClick={() => editTask(index)}
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
