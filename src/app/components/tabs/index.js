"use client"
import { useState } from "react";
import styles from "./index.module.css";


const Tab = () => {
const[status, SetStatus] = useState("All")

    return (
      <div>
        <button className={`${styles.controlBtn} ${styles.activeBtn}`}>All</button>
        <button className={styles.controlBtn}>Active</button>
        <button className={styles.controlBtn}>Completed</button>
      </div>
  );
};

export default Tab;