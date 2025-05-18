import styles from "./index.module.css"
import Input from "../input/index.js"
import TaskList from "../task-list/index.js"

const Taskcontainer = (props) =>{
    return(
        <div>
         <Input></Input>
        <TaskList tasks={props.tasks} ></TaskList>
        </div>

    )
}
export default Taskcontainer