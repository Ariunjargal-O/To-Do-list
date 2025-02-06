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

    // MY bichiglel
    // console.log(inputValue);
    // const newTasks = [...addtasks];
    // newTasks.push(inputValue);        // 1 bichiglel

    // const newTasks = [inputValue, ...addtasks]; // 2 bichiglel buyu pushlegdej bga auvomat
    // setTasks(newTasks);


    // AI ynlasan ni 
    // if(inputValue.trim() === "")return;   // Prevent adding empty tasks
    const newTasks = { text:inputValue, completed:false , id: Date.now()};
    setTasks([newTasks, ...addtasks]);
    setInputValue('')    // Clear input after adding
  }

  function editTask ( index) {
    const task = addtasks[index];


    // const editText = ("")
    // const newTasks = addnewtask("Edit your tasks:",[inputValue]);
    

    // setTasks( newTasks);
    // console.log(editText)
  }

  // const gj function duudah uyd gj bichne.
  //const editTask = () => {
  //   return(
  //   )
  // }
  // export default editTask    --> Gj bichij bj uur js ruu duudna, ene js dotroo bol tgeh shaardlaaggui.
  

  function deleteText(index) {
    // console.log(inputValue);
    const newTasks = addtasks.filter((_, i) => i !== index);
 setTasks(newTasks)
  }

  function completedTask (index) {
    const newTasks = [...addtasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks)
  }

  function handleKeyDown (event) {
    if(event.code === "Enter"){
      addnewtask()
    }
  }



// tabs
// const Tab = () => {
  const [status, SetStatus] = useState("All");

  function changeStatus() {
    SetStatus("All");
  }




  return (
    <div>
      <div>
      <div className={styles.addFlex}>
        <input
          onChange={onChange}
          className={styles.inputText}
          value={inputValue}
          placeholder="Add a new task ..."
          onKeyDown={handleKeyDown}
        />
        <button onClick={addnewtask} className={styles.addBtn}>
          Add
        </button>
      </div>
      <div>
        {addtasks.map((inputValue, index) => (
          <div className={styles.taskFlex} key={inputValue.id} >
            <div className={styles.addFlex}>
              <input 
              type="checkbox"
              checked={inputValue.completed}
              onChange={() => completedTask(index)}
              ></input>


              <p className={styles.addText}
              style={{textDecoration: inputValue.completed ? "line-through" : "none"}}
              >{inputValue.text}</p>

              {/* <input/> */}


            </div>


            <div className={styles.addFlex}>
              <button
               onClick={() => editTask(index)}
                className={styles.changeBtn}
                style={{
                  backgroundColor: "var(--edtbck)",
                  color: "var(--edttxt)",
                }}
              >Edit
              </button>


              <button
                onClick={() => deleteText(index)}
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


      <button
        onClick={() => SetStatus("All")
        }
        className={`${status === "All" ? styles.activeBtn : styles.controlBtn}`}
      >
        All
      </button>
      <button onClick={() => SetStatus("Active")} 
      className={`${status === "Active" ? styles.activeBtn : styles.controlBtn}`}>
        Active
      </button>
      <button
        onClick={() => SetStatus("Completed")}
        className={`${status === "Completed" ? styles.activeBtn : styles.controlBtn}`}
      >
        Completed
      </button>
      </div>
      
      
      
      
      {/* tabs */}
  
    </div>
  );
};
export default Input;
