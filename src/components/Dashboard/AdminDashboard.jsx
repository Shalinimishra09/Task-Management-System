import React from 'react'
import Header from '../auth/others/Header'
import CreateTask from '../auth/others/CreateTask'
import AllTask from '../auth/others/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='w-full bg-[#1c1c1c] h-screen p-10'>
      <Header changeUser={props.changeUser }/>
      <CreateTask />
      <AllTask/>

    </div>
  )
}

export default AdminDashboard
