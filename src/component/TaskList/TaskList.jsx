function TaskList(){
    return(
        <>
        <div id='taskList' className="h-[55%] overflow-x-auto py-5 w-full flex items-center justify-start gap-5 flex-nowrap  mt-10">
            <div className="h-full flex-shrink-0 p-5 w-[300px] bg-red-400 rounded-xl">
                <div className="flex justify-between items-center ">
                    <h3 className="bg-red-600 text-sm px-3 py-1 rounded">Hign</h3>
                    <h4 className="text-sm">20 feb 2024</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold">
                    Make a youtube video
                </h2>
                <p className="text-sm mt-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus veritatis in cum maiores aut quisquam voluptas sunt odit laudantium earum quo temporibus eaque, dolore quae non quaerat reprehenderit odio repellendus.

                </p>
            </div>

        </div>
        </>
    )
}
export default TaskList;