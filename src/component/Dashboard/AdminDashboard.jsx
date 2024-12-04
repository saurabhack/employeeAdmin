import AllTasks from "../other/AllTasks"
import CreateTasks from "../other/CreateTasks"
import Header from "../other/Header"
function AdminDeshboard(){
    return(
        <>
        <div className="p-10">
            <Header/>
            <CreateTasks/>
            <AllTasks/>
           
        </div>
        </>
    )
}
export default AdminDeshboard