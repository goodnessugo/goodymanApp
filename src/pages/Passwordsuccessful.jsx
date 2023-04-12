import React from 'react'
import { Link } from 'react-router-dom'


const Passwordsuccessful = () => {
  return (
    <div className='w-full h-screen relative flex justify-center items-center'>



    <div className='formField h-fit w-2/6 bg-white rounded-3xl z-20 drop-shadow-xl absolute'>
      <div className='my-5 text-center '>
        <h1 className='text-2xl font-bold text-blue-500'>Congratulations</h1>
        <h1 className='text-2xl font-bold text-blue-500'>Password Created Successfully</h1>
      </div>

     
      <div className='text-center mb-5'>
        <h1 className=''>Back to <span className='font-bold text-blue-500'><Link to='/signin'>Sign in</Link></span></h1>
      </div>

    </div>


       {/* This carries the background Image */}
    <div className='loginBackground w-full h-screen bg-green-500 z-0 opacity-50 flex justify-center items-center'>
      
    </div>
  </div>
  )
}

export default Passwordsuccessful
