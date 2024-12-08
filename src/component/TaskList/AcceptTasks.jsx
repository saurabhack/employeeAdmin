function AcceptTasks({data}){
    return(
        <>
            <div className="h-full flex-shrink-0 p-5 w-[300px] bg-yellow-400 rounded-xl">
                <div className="flex justify-between items-center ">
                    <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
                    <h4 className="text-sm">{!data.date ? (data.taskDate) : (data.date)}</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold">
                    {!data.title ? (data.taskTitle) :(data.title) }
                </h2>
                <p className="text-sm mt-2">
                    {!data.description ? (data.taskDescription) : (data.description)}
                </p>
                <div className="flex justify-between mt-4 ">
                    <button className="bg-green-500 px-2 py-1 text-sm">Mark As Completed</button>
                    <button className="bg-red-500 px-2 py-1 text-sm">Mark As Failed</button>
                </div>
            </div>

        </>
    )
}
export default AcceptTasks