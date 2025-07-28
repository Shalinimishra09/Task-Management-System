import React from 'react'

const TaskNumber = ({data}) => {
  return (
    <div className='flex m-10 justify-between gap-5 screen'>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-amber-700'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'> NEW TASK</h3>
        </div>
       < div className='rounded-xl w-[45%] py-6 px-9 bg-purple-600'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'> NEW TASK</h3>
        </div>
         < div className='rounded-xl w-[45%] py-6 px-9 bg-green-500'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'> NEW TASK</h3>
        </div>
         < div className='rounded-xl w-[45%] py-6 px-9 bg-blue-400'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'> NEW TASK</h3>
        </div>
      
    </div>
  )
}

export default TaskNumber
