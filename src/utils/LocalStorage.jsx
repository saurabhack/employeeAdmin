// localStorage.clear()

const employees = [
  {
    id: 1,
    // email: "john.doe@example.com",
    email:'ab@gmail.com',
    password: "123",
    name: "John Doe",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
      accepted:2
    },
    tasks: [
      {
        title: "Task 234",
        description: "Complete the login module.",
        date: "2023-12-01",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        accepted:2
      },
      {
        title: "Task 567",
        description: "Design the homepage layout.",
        date: "2023-11-25",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: true,
        accepted:2
      },
      {
        title: "Task 768",
        description: "Fix the search bar functionality.",
        date: "2023-10-15",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        
      }
    ]
  },
  {
    id: 2,
    email: "jane.smith@example.com",
    password: "123",
    name: "Jane Smith",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
      accepted:2
    },
    tasks: [
      {
        title: "Task 101",
        description: "Document the project requirements.",
        date: "2023-11-20",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Task 304",
        description: "Prepare marketing materials.",
        date: "2023-09-30",
        category: "Marketing",
        active: false,
        newTask: true,
        completed: false,
        failed: true
      },
      {
        title: "Task 405",
        description: "Review code for bug fixes.",
        date: "2023-08-15",
        category: "Development",
        active: true,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 3,
    email: "michael.brown@example.com",
    password: "123",
    name: "Michael Brown",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
      accepted:2
    },
    tasks: [
      {
        title: "Task 567",
        description: "Update the database schema.",
        date: "2023-10-05",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Task 700",
        description: "Write test cases for API endpoints.",
        date: "2023-11-10",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 4,
    email: "susan.jones@example.com",
    password: "123",
    name: "Susan Jones",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
      accepted:2
    },
    tasks: [
      {
        title: "Task 200",
        description: "Create wireframes for new features.",
        date: "2023-11-15",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Task 305",
        description: "Organize team sprint meeting.",
        date: "2023-10-20",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 5,
    email: "david.clark@example.com",
    password: "123",
    name: "David Clark",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
      accepted:2
    },
    tasks: [
      {
        title: "Task 450",
        description: "Optimize website performance.",
        date: "2023-12-05",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Task 780",
        description: "Run final deployment tests.",
        date: "2023-11-18",
        category: "Testing",
        active: false,
        newTask: true,
        completed: false,
        failed: true
      },
      {
        title: "Task 870",
        description: "Prepare project handover documentation.",
        date: "2023-09-12",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
];

const admin=[
  {
    "id": 1,
    "email": "admin@gmail.com",
    "password": "123"
  }
]

export function setLocalStorage(){
  localStorage.setItem('employees',JSON.stringify(employees)) 
  localStorage.setItem('admin',JSON.stringify(admin)) 
}

export function getLocalStorage(){
  const employees=JSON.parse(localStorage.getItem('employees'))
  const admin=JSON.parse(localStorage.getItem('admin'))
  return {employees,admin}
}

 