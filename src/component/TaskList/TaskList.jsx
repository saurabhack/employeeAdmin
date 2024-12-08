import AcceptTasks from "./AcceptTasks";
import CompleteTasks from "./CompleteTasks";
import FailedTask from "./FailedTasks";
import NewTask from "./NewTasks";

function TaskList({data}){
    console.log("data",data)
    return(
        <>
        <div id='taskList' className="h-[55%] overflow-x-auto py-5 w-full flex items-center justify-start gap-5 flex-nowrap  mt-10">
            {
                data?.tasks?.map((val,i)=>{
                    if(val.active){
                        return <AcceptTasks key={i} data={val} />
                    }
                    if(val.newTask){
                        return <NewTask key={i} data={val}/>
                    }
                    if(val.failed){
                        return <FailedTask key={i} data={val}/>
                    }
                    if(val.completed){
                        return <CompleteTasks key={i} data={val}/>
                    }

                })
            }
        </div>
        </>
    )
}
export default TaskList;