"use client";

import { all } from "axios";
import { nanoid } from "nanoid";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("All");

  const inputValue = (event) => {
    setInput(event.target.value);
    // console.log(input);
  };

  const addNewTask = () => {
    const clonedTasks = [
      ...tasks,
      {
        taskText: input,
        isCompleted: false,
        id: nanoid(),
      },
    ];
    setTasks(clonedTasks);
    console.log(clonedTasks);
  };

  const onkeydown = (event) => {
    if (event.code == "Enter") addNewTask();
  };

  const edtBtn = (index) => {
    const clonedTasks = [...tasks];
    const updateTaskText = prompt("Edit Task", clonedTasks[index].taskText);
    clonedTasks[index].taskText = updateTaskText;
    setTasks(clonedTasks);
  };

  const delBtn = (index) => {
    const clonedTasks = [...tasks];
    clonedTasks.splice(index, 1);
    setTasks(clonedTasks);
  };

  const CheckComplete = (index) => {
    const clonedTasks = [...tasks];
    clonedTasks[index].isCompleted = !clonedTasks[index].isCompleted;
    setTasks(clonedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (status === "All") {
      return task;
    } else if (status === "Active") {
      return !task.isCompleted;
    } else if (status === "Completed") {
      return task.isCompleted;
    }

    setTasks(filteredTasks);
  });

  const allDelete = () => {
    setTasks([]);
  };

  return (
    <div className="flex mx-auto box-border shadow-2xl flex-col py-6 px-6 bg-white w-fit mt-15 border border-gray-100">
      <header
        className="text-3xl font-semibold
       not-italic leading-7 mb-5 text-center"
      >
        To-do List
      </header>
      <div className="flex flex-col">
        <div className="flex gap-3 justify-between">
          <input
            type="text"
            placeholder="Add a new task..."
            className="px-4 py-2 w-[280px] border-2 rounded-md border-gray-300"
            onChange={inputValue}
            onKeyDown={onkeydown}
          ></input>
          <button
            className="py-1 px-3 bg-blue-500 text-white text-sm not-italic font-normal rounded-md cursor-pointer"
            onClick={addNewTask}
          >
            Add
          </button>
        </div>
        <div className="flex mt-5 gap-3">
          <button
            className={`py-1 px-3 text-sm not-italic font-normal rounded-md cursor-pointer ${
              status === "All"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-black"
            }`}
            onClick={() => setStatus("All")}
          >
            All
          </button>
          <button
            className={`py-1 px-3 text-sm not-italic font-normal rounded-md cursor-pointer ${
              status === "Active"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-black"
            }`}
            onClick={() => setStatus("Active")}
          >
            Active
          </button>
          <button
            className={`py-1 px-3 text-sm not-italic font-normal rounded-md cursor-pointer ${
              status === "Completed"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-black"
            }`}
            onClick={() => {
              setStatus("Completed");
            }}
          >
            Completed
          </button>
        </div>
      </div>

      <div>
        {tasks.length === 0 ? (
          <div className="py-10 flex justify-center text-gray-500">
            No tasks yet. Add one above!
          </div>
        ) : (
          <div>
            {filteredTasks.map((task, index) => {
              return (
                <div
                  className="flex justify-between p-4 bg-gray-100 rounded-sm my-5 items-center  "
                  key={task.id}
                >
                  <div className="flex gap-3">
                    <input
                    className="cursor-pointer"
                      type="checkbox"
                      checked={task.isCompleted}
                      onChange={() => {
                        CheckComplete(index);
                      }}
                    ></input>
                    <p
                      className={`text-sm not-italic font-normal w-[150px] break-all ${
                        task.isCompleted == true
                          ? "line-through text-gray-400"
                          : ""
                      }`}
                    >
                      {task.taskText}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      className="py-1 px-3 text-sm not-italic font-normal rounded-md bg-red-100 text-red-500 cursor-pointer"
                      onClick={() => {
                        edtBtn(index);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="py-1 px-3 text-sm not-italic font-normal rounded-md bg-blue-100 text-blue-800 cursor-pointer"
                      onClick={() => {
                        delBtn(index);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div>
        <hr className="my-2 text-gray-300"></hr>
        <div className="flex justify-between">
          <p className="text-gray-500"> {tasks.length} tasks completed</p>
          <p
            onClick={() => {
              allDelete();
            }}
            className="text-red-500 cursor-pointer"
          >
            Clear Compeleted
          </p>
        </div>
      </div>
      <footer className="text-center mt-4">
        Powered by <a className="text-blue-500 cursor-pointer">Pine Ariii</a>
      </footer>
    </div>
  );
}
