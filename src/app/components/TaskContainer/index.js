import styles from "./index.module.css"
import Tab from "../tabs/index.js"
import TaskList from "../task-list/index.js"

const Taskcontainer = (props) =>{
    return(
        <div>
        <Tab></Tab>
        <TaskList Tasks={props.Tasks} ></TaskList>
        </div>

    )
}
export default Taskcontainer