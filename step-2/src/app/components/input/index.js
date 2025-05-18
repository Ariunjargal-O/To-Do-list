"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.css";

const Input = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [addtasks, setTasks] = useState([]);
  const [filteredtasks, setFilteredTasks] = useState([]);
  const [status, setStatus] = useState("All");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  // Update filtered tasks whenever tasks or status changes
  useEffect(() => {
    filterTasks();
  }, [addtasks, status]);

  const filterTasks = () => {
    switch (status) {
      case "Active":
        setFilteredTasks(addtasks.filter(task => !task.completed));
        break;
      case "Completed":
        setFilteredTasks(addtasks.filter(task => task.completed));
        break;
      default:
        setFilteredTasks(addtasks);
    }
  };

  const addnewtask = () => {
    if (!inputValue.trim()) return;
    const newTask = { 
      text: inputValue.trim(), 
      completed: false, 
      id: Date.now() 
    };
    setTasks([newTask, ...addtasks]);
    setInputValue("");
  };

  const editTask = (id) => {
    const task = addtasks.find(task => task.id === id);
    setEditingId(id);
    setEditText(task.text);
  };

  const saveEdit = (id) => {
    const updatedTasks = addtasks.map(task => 
      task.id === id ? {...task, text: editText.trim()} : task
    );
    setTasks(updatedTasks);
    setEditingId(null);
    setEditText("");
  };

  const deleteTask = (id) => {
    const newTasks = addtasks.filter(task => task.id !== id);
    setTasks(newTasks);
  };

  const toggleComplete = (id) => {
    const updatedTasks = addtasks.map(task => 
      task.id === id ? {...task, completed: !task.completed} : task
    );
    setTasks(updatedTasks);
  };

  const handleKeyDown = (event) => {
    if (event.code === "Enter") {
      if (editingId !== null) {
        saveEdit(editingId);
      } else {
        addnewtask();
      }
    }
  };

  

  return (
    <div>
      <div className={styles.addFlex}>
        <input
          onChange={(e) => setInputValue(e.target.value)}
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
        <button
          onClick={() => setStatus("All")}
          className={status === "All" ? styles.activeBtn : styles.controlBtn}
        >
          All
        </button>
        <button
          onClick={() => setStatus("Active")}
          className={status === "Active" ? styles.activeBtn : styles.controlBtn}
        >
          Active
        </button>
        <button
          onClick={() => setStatus("Completed")}
          className={status === "Completed" ? styles.activeBtn : styles.controlBtn}
        >
          Completed
        </button>
      </div>

      <div>
        {filteredtasks.map((task) => (
          <div className={styles.taskFlex} key={task.id}>
            <div className={styles.addFlex}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
              />
              
              {editingId === task.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onBlur={() => saveEdit(task.id)}
                  autoFocus
                />
              ) : (
                <p
                  className={styles.addText}
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    opacity: task.completed ? 0.5 : 1
                  }}
                >
                  {task.text}
                </p>
              )}
            </div>

            <div className={styles.taskActions}>
              <button
                onClick={() => 
                  editingId === task.id ? saveEdit(task.id) : editTask(task.id)
                }
                className={styles.changeBtn}
                style={{
                  backgroundColor: "var(--edtbck)",
                  color: "var(--edttxt)",
                }}
              >
                {editingId === task.id ? "Save" : "Edit"}
              </button>

              <button
                onClick={() => deleteTask(task.id)}
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

      <div>
      

      {addtasks.length === 0 ? <div className={styles.noTasksMessage}>No tasks yet. Add one above!</div> : <div ></div>}
    </div>
    </div>

    
  );
};

export default Input;