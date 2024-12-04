import { useState } from "react"

function CreateTasks(){

    const [taskTitle,setTaskTitle]=useState('')
    const [taskDescription,setDescription]=useState('')
    const [taskDate,setTaskDate]=useState('')
    const [asignTo,setAsignTo]=useState('')
    const [category,setCategory]=useState('')
    const [task,setTask]=useState({})
    const submitHandler=(e)=>{
        e.preventDefault()
        setTask({taskTitle,taskDescription,taskDate,category,asignTo,active:false,newTask:true,failed:true,completed:false})
        setTaskDate('')
        setTaskTitle('')
        setCategory('')
        setDescription('')
        setAsignTo('')

    }
    return(
        <>
         <div className="p-5 bg-[rgb(28,28,28)] mt-7 rounded">
                <form action="" onSubmit={(e)=>{
                    submitHandler(e)
                }} className="flex items-start flex-wrap w-full   justify-between ">
                    <div className="w-1/2">
                    <div>
                    <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
                    <input type="text" value={taskTitle} onChange={(e)=>setTaskTitle(e.target.value)} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-green-600 mb-4" placeholder="Enter task" />
                    </div>
                    <div>
                    <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                    <input value={taskDate} onChange={(e)=>setTaskDate(e.target.value)} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-green-600 mb-4" type="date" />
                    </div>
                    <div>
                    <h3 className="text-sm text-gray-300 mb-0.5">Asign To</h3>
                    <input value={asignTo} onChange={(e)=>setAsignTo(e.target.value)} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-green-600 mb-4"  type="text" placeholder="employee name" />
                    </div>
                    <div>
                    <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                    <input value={category} onChange={(e)=>setCategory(e.target.value)} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-green-600 mb-4" type="text" placeholder="design,dev,etc" />
                    </div>
                    </div>
                    
                    <div className="w-1/2 flex-col items-start">
                    <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
                    <textarea value={taskDescription} onChange={(e)=>setDescription(e.target.value)} className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-green-500 mb-4" name="" id="" ></textarea>
                    <button className="bg-emerald-500 hover:bg-emerald-600 px-5 py-2 rounded text-sm mt-4 w-full">Create Task</button>
                    </div>
                    
                    
                </form>
            </div>
        </>
    )
}
export default CreateTasks