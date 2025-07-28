import React from 'react'
import { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthProvider'

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

        const data = userData

        data.forEach(function (elem) {
            if (asignTo == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })
        setUserData(data)
        console.log(data);

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')

    }
  return (
    <div className='bg-[#1c1c1c] p-5'>
      <div>
        <form className='flex items-center justify-between mt-7 rounded' >
           <div className='w-1/2'>
            <div><h3>Task Title</h3>
            <input  className='text-sm py-1 px-2  w-4/5 rounder outline-none bg bg-transparent border-[1px] border-gray-400 mb-4'type="text" placeholder='Enter Task Title' /></div>
            <div><h3>Date</h3>
       <input className='text-sm py-1 px-2  w-4/5 rounder outline-none bg bg-transparent border-[1px] border-gray-400 mb-4'type="date" /></div>
       <div><h3>Assign to</h3>
       <input className='text-sm py-1 px-2  w-4/5 rounder outline-none bg bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' /></div>
      <div> <h3>Category</h3>
       <input className='text-sm py-1 px-2  w-4/5 rounder outline-none bg bg-transparent border-[1px] border-gray-400 mb-4'type="text" placeholder='design, dev etc' /></div>
      
       
       </div>
            
       <div className='w-2/5 flex flex-col items-start'><h3>Task Description</h3>
       <textarea className='text-sm py-1 px-2 h-44  w-full rounder outline-none bg bg-transparent border-[1px] border-gray-400 mb-4' name=""id ="" cols="30" rows="10" placeholder='Enter Task Description'></textarea>
        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 rounded-xl text-sm mt-4 w-full'>Create Task</button>
       </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTask
