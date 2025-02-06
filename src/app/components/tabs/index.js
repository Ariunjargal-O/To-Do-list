"use client";
import { useState } from "react";
import styles from "./index.module.css";
import Input from "../task-list";

const Tab = () => {
  const [status, SetStatus] = useState("All");

  function changeStatus() {
    SetStatus("All");
    // const filtertask = TaskList.filter(tesk => task.isComplete == true)
    // setTasks(filtertask)
  }

  // function onClickActive () {
  //   const filtertask = TaskList.filter(tesk => task.isComplete == true)
  //   setTasks(filtertask)
  // }




  return (
    <div>
      <button
        onClick={() => {
          SetStatus("All");
        }
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
  );
};

export default Tab;
