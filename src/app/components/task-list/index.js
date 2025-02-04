import styles from "./tasklist.module.css";

const Tasks = [];

const task = [
  {
    title: "Todo List",
    isComplete: false,
  },
];

const TaskList = () => {
  if (Tasks.length == 0) {
    return (
      <div>
        <p className={styles.noTasksMessage}>No tasks yet. Add one above!</p>
      </div>
    );
  }

  return (
    <div>
      {Tasks.map((task) => {
        return <div>{task.title}</div>;
      }
      )
      }
    </div>
  );
};
export default TaskList;
