function TaskNumber({data}){
    return(
        <>
        <div className="flex justify-between gap-5  ">
            <div className="rounded-xl w-[40%] py-6 px-9 bg-blue-400">
                <h2 className="text-2xl">{data.taskNumbers.newTask}</h2>
                <h3 className="text-2xl font-medium">New Task</h3>
            </div>
            <div className="rounded-xl w-[45%] py-6 px-9 bg-green-400">
                <h2 className="text-2xl">{data.taskNumbers.completed}</h2>
                <h3 className="text-2xl font-medium">Complete Task</h3>
            </div>
            <div className="rounded-xl w-[45%] py-6 px-9 bg-yellow-400">
                <h2 className="text-2xl text-black">{data.taskNumbers.active}</h2>
                <h3 className="text-2xl text-black font-medium">Accepted Task</h3>
            </div>
            <div className="rounded-xl w-[45%] py-6 px-9 bg-red-400">
                <h2 className="text-2xl">{data.taskNumbers.failed}</h2>
                <h3 className="text-2xl font-medium">Failed Task</h3>
            </div>
            </div>        
        </>
    )
}
export default TaskNumber