import styles from "./tasklist.module.css";

// const Tasks = [];

// const task = [
//   {
//     title: "Todo List",
//     isComplete: false,
//   },
// ];

const TaskList = (props) => {
  if (props.newTask.length == 0) {
    return (
      <div>
        <p className={styles.noTasksMessage}>No tasks yet. Add one above!</p>
      </div>
    );
  }

  return (
    <div>
      {props.newTask.map((task,index) => {
        return <div key={index} >{task.title}</div>;
      })}
    </div>
  );
};
export default TaskList;
