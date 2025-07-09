'use client'

import Title from "./components/title/index.js";
import Input from "./components/input/index.js";
import Footer from "./components/footer/index.js"
import { useState } from "react";



export default function Home() {
  const [tasks, setTasks] = useState([])
  console.log(tasks)
  return (
    <div >
      <Title></Title>
      {/* <Taskcontainer tasks={tasks} setTasks = {setTasks}></Taskcontainer> */}
     <Input></Input>
      <Footer></Footer>
    <p></p>
    </div>
  );
}
