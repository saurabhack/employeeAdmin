import Header from "../other/Header"
import TaskNumber from "../other/TaskNumber"
import TaskList from "../TaskList/TaskList"

function EmployeeDashboard(){
    return(
        <>
        <div className="p-10 bg-[#1C1C1C] h-screen">
            <Header/>
            <TaskNumber/>
            <TaskList/>
        </div>
        </>
    )
}
export default EmployeeDashboard