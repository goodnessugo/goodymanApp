import React from 'react'
import { BsSearch, BsMicFill } from 'react-icons/bs';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { TbVideoPlus } from 'react-icons/tb';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className=' w-full h-20  flex items-start justify-between p-4 '>




    <div className='formSection&Mic flex justify-end items-center  w-8/12 '>

      <div className=' h-10 w-9/12 rounded-l-full bg-white border border-gray flex justify-start items-center pl-3'>

        <div className='search flex justify-center items-center  w-10 '>
          <BsSearch />
        </div>

        <form method='post' >

          <input type="text" placeholder='Search' className=' w-full  focus:outline-none' />

        </form>
      </div>


      <div className=' flex '>
        <div className='search flex  justify-center items-center bg-gray-100 hover:bg-gray-300 border border-gray w-16 rounded-r-full'>
          <BsSearch />
        </div>

        <div className='microphone flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-300 ease-in-out duration-300'>
          <BsMicFill />
        </div>

      </div>



    </div>



    <div className='profileSection flex justify-between w-2/12  px-4'>

      <div className=' hover:bg-gray-300 ease-in-out duration-300 rounded-full h-10 w-10 flex items-center justify-center'>
        <TbVideoPlus size='1.5rem' />
      </div>

      <div className='   hover:bg-gray-300 ease-in-out duration-300 rounded-full h-10 w-10 flex items-center justify-center'>
        <IoIosNotificationsOutline size='1.5rem' />
      </div>

      <Link to='/userprofile'>
        <div >
          <div className='profileImage h-10 w-10 bg-green-500 rounded-full '>
            <br />

            <h1 className='font-bold mt-3'>Anna</h1>
          </div>

        </div>
      </Link>

    </div>



  </div>
  )
}

export default Navbar
