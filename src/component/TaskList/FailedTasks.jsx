function FailedTask({data}){
    return(
        <>
        <div className="h-full flex-shrink-0 p-5 w-[300px] bg-red-400 rounded-xl">
                <div className="flex justify-between items-center ">
                    <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
                    <h4 className="text-sm">{data.date}</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold">
                    {data.title}
                </h2>
                <p className="text-sm mt-2">
                    {data.description}
                </p>
                <div className=" mt-2 ">
                    <button className="bg-green-500 px-2 w-full text-sm">Failed Task</button>
                </div>
            </div>
        </>
    )
}
export default FailedTask