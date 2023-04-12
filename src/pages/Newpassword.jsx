import React from 'react'
import { Link } from 'react-router-dom'


const Newpassword = () => {
  return (
    <div className='w-full h-screen relative flex justify-center items-center'>



      <div className='formField h-fit w-2/6 bg-white rounded-3xl z-20 drop-shadow-xl absolute'>
        <div className='my-5 text-center '>
          <h1 className='text-2xl font-bold text-blue-500'>Create New Password</h1>
        </div>

        <form action="/passwordsuccessful" className=' my-5 mx-5'>
          <input type="password" className='w-full h-12 focus:outline-none pl-5 rounded-md border mt-5 drop-shadow-lg' placeholder='New password' required />
          <input type="password" className='w-full h-12 focus:outline-none pl-5 rounded-md border mt-5 drop-shadow-lg' placeholder='Con. Password' required />
          <br />

          <div className=' flex justify-center'>
            <button className='my-5 border px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-200 hover:text-blue-700 font-bold w-7/12 '>Submit</button>
          </div>

        </form>
        

      </div>


         {/* This carries the background Image */}
      <div className='loginBackground w-full h-screen bg-green-500 z-0 opacity-50 flex justify-center items-center'>
        
      </div>
    </div>
  )
}

export default Newpassword
