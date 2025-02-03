import TaskList from "../task-list";
import styles from "./index.module.css";


const Input = () => {
  return (
    <div>
      <div className={styles.addFlex}>
        <input className={styles.inputText} placeholder="Add a new task ..." />
        <button className={styles.addBtn}>Add</button>
      </div>

      <div>
        <button className={styles.controlBtn}>All</button>
        <button className={styles.controlBtn}>Active</button>
        <button className={styles.controlBtn}>Completed</button>
      </div>
    </div>
  );
};
export default Input;
