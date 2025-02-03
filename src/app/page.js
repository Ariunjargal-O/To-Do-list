
import styles from "./page.module.css";
import Title from "./components/title/index.js";
import Input from "./components/input/index.js";
import TaskList from "./components/task-list/index.js"



export default function Home() {
  return (
    <div className={styles.cardContainer}>
      <Title></Title>
      <Input></Input>
      <TaskList></TaskList>
     
    </div>
  );
}
