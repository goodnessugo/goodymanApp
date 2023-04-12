import React from 'react'
import { Link } from 'react-router-dom'

const Create = () => {
  return (
    <div className='w-full h-screen relative flex justify-center items-center'>



      <div className='formField h-5/6 w-2/6 bg-white rounded-3xl z-20 drop-shadow-xl absolute'>
        <div className='my-5 text-center '>
          <h1 className='text-2xl font-bold text-blue-500'>Create Account</h1>
        </div>

        <form action="" className=' my-5 mx-5'> 
          <input type="text" className='w-full h-12 focus:outline-none pl-5 rounded-md border mt-5 drop-shadow-lg' placeholder='First name' required />
          <input type="text" className='w-full h-12 focus:outline-none pl-5 rounded-md border mt-5 drop-shadow-lg' placeholder='Last name' required />
          <input type="email" className='w-full h-12 focus:outline-none pl-5 rounded-md border mt-5 drop-shadow-lg' placeholder='Email' required />
          <input type="password" className='w-full h-12 focus:outline-none pl-5 rounded-md border mt-5 drop-shadow-lg' placeholder='Password' required />
          <input type="password" className='w-full h-12 focus:outline-none pl-5 rounded-md border mt-5 drop-shadow-lg' placeholder='Con. Password' required />
          <br />

          <div className=''>
            <button className='my-5 mx-20 border px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-200 hover:text-blue-700 font-bold w-7/12 '>Submit</button>
          </div>

        </form>
        <div className='text-center'>
          <h1 className=''>Already have an account <span className='font-bold text-blue-500'><Link to='/signin'>Sign In</Link></span></h1>
        </div>

      </div>

      {/* This carries the background Image */}
      <div className='createBackground w-full h-screen bg-green-500 z-0 opacity-50 flex justify-center items-center'>
        
      </div>
    </div>
  )
}

export default Create
