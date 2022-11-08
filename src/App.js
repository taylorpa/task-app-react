import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([  
    {
        id:1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Get Groceries',
        day: 'Feb 6th at 4:00pm',
        reminder: false,
    },
    {
        id:3,
        text: 'Water Plants',
        day: 'Feb 8th at 8:00am',
        reminder: true,
    },
  ])

  // ADD TASK
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // DELETE TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)) 
  }

  // TOGGLE REMINDER
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? {...task, reminder: 
        !task.reminder } : task
      )
    )
  }

  return (
    <div className="container">
      <Header  
        onAdd= {() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd = {addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} 
        onToggle={toggleReminder} /> 
        ) : (
        'No Tasks To Show'
      )}
    </div>
  )
}

export default App;
