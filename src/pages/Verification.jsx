import React from 'react'
import { BsFillKeyFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Verification = () => {
  return (
    <div className='w-full h-screen relative flex justify-center items-center'>



      <div className='formField h-fit w-2/6 bg-white rounded-3xl z-20 drop-shadow-xl absolute'>
        <div className='my-5 text-center '>
          <h1 className='text-lg font-bold text-blue-500'>A Code has being sent to this Email, input it </h1>
        </div>

        <div className=' w-full '>
          <form action="/newpassword"  >
            <div className='p-5  flex justify-evenly items-center w-full '>
              <input type="text" className='w-12 h-16 border focus:outline-none rounded-md drop-shadow-xl text-center font-bold text-3xl' required />
              <input type="text" className='w-12 h-16 border focus:outline-none rounded-md drop-shadow-xl text-center font-bold text-3xl' required />
              <input type="text" className='w-12 h-16 border focus:outline-none rounded-md drop-shadow-xl text-center font-bold text-3xl' required />
              <input type="text" className='w-12 h-16 border focus:outline-none rounded-md drop-shadow-xl text-center font-bold text-3xl' required />
              <input type="text" className='w-12 h-16 border focus:outline-none rounded-md drop-shadow-xl text-center font-bold text-3xl' required />
              <input type="text" className='w-12 h-16 border focus:outline-none rounded-md drop-shadow-xl text-center font-bold text-3xl' required />
            </div>
            <div className='flex justify-center'>
              <button className='my-5  border px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-200 hover:text-blue-700 font-bold w-7/12 flex justify-evenly items-center'> Verify </button>
            </div>
          </form>
        </div>



      </div>


      {/* This carries the background Image */}
      <div className='loginBackground w-full h-screen bg-green-500 z-0 opacity-50 flex justify-center items-center'>

      </div>
    </div>
  )
}

export default Verification
