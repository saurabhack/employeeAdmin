import Login from "./component/Auth/Login"
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard"
import AdminDeshboard from "./component/Dashboard/AdminDashboard"
import { useContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage"
import { AuthContext } from "./context/AuthProvider"
function App(){
  const [user, setUser] = useState("");
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData] = useContext(AuthContext);
  // console.log("function is here===",logout())
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setUser(parsedUser.role);
      setLoggedInUserData(parsedUser.data);
    }
  }, []);

console.log("data of employees",userData)
// console.log("authenticated data===",authData)
function handleLogin(email, password) {
  if (email === "admin@gmail.com" && password === "123") {
    setUser("admin");
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ role: "admin" })
    );
  } else if (userData[0]) {
    const employee = userData.find(
      (e) => e.email === email && e.password === password
    );
    if (employee) {
      setUser({ role: "employee" });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee })
      );
      setLoggedInUserData(employee);
    } else {
      console.log("invalid credintials please try again later")
    }
  }
}
handleLogin()
console.log("user====",user)

  return(
    <>
    {
      console.log("user===",user)
    }
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