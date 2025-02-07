'use client'
import styles from "./page.module.css";
import Title from "./components/title/index.js";
import Input from "./components/input/index.js";
import Footer from "./components/footer/index.js"
import Taskcontainer from "./components/TaskContainer";
import { useState } from "react";



export default function Home() {
  const [tasks, setTasks] = useState([])
  console.log(tasks)
  return (
    <div className={styles.cardContainer}>
      <Title></Title>
      {/* <Taskcontainer tasks={tasks} setTasks = {setTasks}></Taskcontainer> */}
     <Input></Input>
      <Footer></Footer>
    
    </div>
  );
}
