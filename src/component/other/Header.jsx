import { setLocalStorage } from "../../utils/LocalStorage"

function Header({data}){
    const logout=()=>{
        localStorage.setItem('loggedInUser','')
        window.location.reload()
    }
    return(
        <>
        <div className="flex justify-between items-center">
            <h1 className=" font-medium text-2xl">Hello <br/> <span className="text-3xl font-semibold"> {data?.name} 👋</span></h1>
            <button className="bg-red-500 text-white text-lg font-medium px-5 py-2 rounded-sm  " onClick={logout}>Log Out</button>
        </div>
        </>
    )
}
export default Header