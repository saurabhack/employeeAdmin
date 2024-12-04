import Login from "./component/Auth/Login"
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard"
import AdminDeshboard from "./component/Dashboard/AdminDashboard"
import { useContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage"
import { AuthContext } from "./context/AuthProvider"
function App(){
  const [user,setUser]=useState(null)
  const [loggedInUserData,setLoggedInUserData]=useState()
  const authData=useContext(AuthContext)
  
// useEffect(()=>{
//   if(authData){
//     const loggedInUser=localStorage.getItem('loggedInUser')
//     if(loggedInUser){
//       setUser(loggedInUser)
//     }
//   }
// },[authData])
  // console.log("authentication data ===",employees)

// useEffect(()=>{
//   const loggedInUser=localStorage.getItem('loggedInUser')
//   if(loggedInUser){
//     const userData=JSON.parse(loggedInUser)
//     setUser(userData.role)
//     setLoggedInUserData(userData.data)
//   }
// },[])

console.log("authenticated data===",authData)
function handleLogin(email,password){
      if(email=="admin@gmail.com" && password==123){
        setUser('admin')
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))

      }
     else if(authData ){
      const employee= authData.employees.find((e)=>{return email == e.email}) && authData.employees.find((e)=>{return password == e.password})
      if(employee){
        setUser({role:'employee'})
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
      setLoggedInUserData(employee)
      }      
    }else{
      console.log("invalid credintials")
    }
  }
handleLogin()
console.log("user====",user)

  return(
    <>
    <div className="">
      {
        
        !user ? (<Login handleLogin={handleLogin}/> ): user=='admin' ? <AdminDeshboard/> : (user.role=="employee" ?<EmployeeDashboard data={loggedInUserData}/>:"") 
      }
      {
      }
    </div>
    </>
  )
}
export default App