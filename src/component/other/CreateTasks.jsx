import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

function CreateTasks() {
  const [userData, setUserData] = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [task, setTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    // Create task object
    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      assignTo,
      active: true,
      newTask: true,
      failed: false,
      completed: false,
    };

    // Check and update user data
    const updatedUserData = userData.map((employee) => {
      if (employee.name === assignTo) {
        return {
          ...employee,
          tasks: [...employee.tasks, newTask],
          taskNumbers: {
            ...employee.taskNumbers,
            active: employee.taskNumbers.active + 1,
          },
        };
      }
      return employee;
    });
    console.log("updated users are",updatedUserData)

    // Save updated data to local storage and state
    setUserData(updatedUserData);
    localStorage.setItem("employees", JSON.stringify(updatedUserData));

    // Reset input fields
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  };

  return (
    <div className="p-5 bg-[rgb(28,28,28)] mt-7 rounded">
      <form
        onSubmit={submitHandler}
        className="flex items-start flex-wrap w-full justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-green-600 mb-4"
              placeholder="Enter task"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-green-600 mb-4"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
              type="text"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-green-600 mb-4"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-green-600 mb-4"
              placeholder="Design, Dev, etc."
            />
          </div>
        </div>

        <div className="w-1/2 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-green-500 mb-4"
            placeholder="Task description"
          ></textarea>
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 px-5 py-2 rounded text-sm mt-4 w-full"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTasks;
