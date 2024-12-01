function Header(){
    return(
        <>
        <div className="flex justify-between items-center">
            <h1 className=" font-medium text-2xl">Hello <br/> <span className="text-3xl font-semibold"> Saurabh 👋</span></h1>
            <button className="bg-red-500 text-white text-lg font-medium px-5 py-2 rounded-sm  ">Log Out</button>
        </div>
        </>
    )
}
export default Header