import styles from "./tasklist.module.css"

const TaskList = () => {
    return(
        <div>
        <div>
          <input type="checkbox"></input>
          <span>asdfghjk</span>
        </div>
<div></div>
        <p className={styles.noTasksMessage}>No tasks yet. Add one above!</p>
      <div className={styles.footerContainer}>
        <span className={styles.footerText}>Powered by </span>
        <span className={styles.madebyCompany}>Pinecone Ari</span>
      </div>
      </div>
    )
}
export default TaskList;
