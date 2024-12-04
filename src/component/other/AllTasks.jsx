import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

function AllTasks(){
    const authData=useContext(AuthContext)
    console.log("authenticated data===",authData)
    
    return(
        <>
        <div className="bg-[#1c1c1c] p-5 rounded mt-5  ">
        <div  className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
                        <h2 className="w-1/5 text-lg font-medium">employee name</h2>
                        <h3 className="w-1/5 text-lg font-medium">New tasks</h3>
                        <h5 className="w-1/5 text-lg font-medium">Active Task</h5>
                        <h5 className="w-1/5 text-lg font-medium">Completed Task</h5>
                        <h5 className="w-1/5 text-lg font-medium">Failed</h5>
                    </div>
            <div className="">

            
            {

                authData?.employees?.map((val,i)=>{
                    return <div key={i} className=" border border-emerald-400 bg-black mb-2 py-2 px-4 flex justify-between rounded">
                        <h2 className="w-1/5 text-lg font-medium ">{val.name}</h2>
                        <h3 className="w-1/5 text-lg font-medium text-blue-600">{val.taskNumbers.newTask}</h3>
                        <h5 className="w-1/5 text-lg font-medium text-yellow-400">{val.taskNumbers.active}</h5>
                        <h5 className="w-1/5 text-lg font-medium text-white-600">{val.taskNumbers.completed}</h5>
                        <h5 className="w-1/5 text-lg font-medium text-red-600">{val.taskNumbers.failed}</h5>
                    </div>
                })
            }

</div>
            
        </div>
        </>
    )
}
export default AllTasks