import React from 'react'
import { BsFiletypeHtml, BsFiletypeCss } from 'react-icons/bs';
import { FaHome, FaReact } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';
import { MdManageHistory, MdKeyboardArrowUp } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';
import { SlLike } from 'react-icons/sl';
import { GrWifi } from 'react-icons/gr';
import { SiJavascript } from 'react-icons/si';
import { FcBarChart } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const LeftSection = () => {
  return (
    <div className='    '>


      {/* the menu listing */}

      <div className='menu sm-w-0 w-44 h-screen pt-5 overflow-x-hidden '>

        <Link to='/'>
          <div className='flex justify-start items-center   rounded-md py-1 px-5  hover:bg-gray-300 ease-in-out '>
            <FaHome size='1.2rem' />
            <h1 className='ml-5 hover:font-bold '>Home</h1>
          </div>
        </Link>

        <Link to='/html'>
          <div className='flex justify-start items-center   rounded-md py-1 px-5 hover:bg-gray-300 ease-in-out '>
            <BsFiletypeHtml size='1.2rem' />
            <h1 className='ml-5 hover:font-bold '>HTML</h1>
          </div>
        </Link>

        <Link to='/css'>
          <div className='flex justify-start items-center   rounded-md py-1 px-5  hover:bg-gray-300 ease-in-out '>
            <BsFiletypeCss size='1.2rem' />
            <h1 className='ml-5 hover:font-bold '>CSS</h1>
          </div>
        </Link>

        <Link to='/javascript'>
          <div className='flex justify-start items-center   rounded-md py-1 px-5  hover:bg-gray-300 ease-in-out '>
            <SiJavascript size='1rem' />
            <h1 className='ml-5  '>JavaScript</h1>
          </div>
        </Link>

        <hr className='my-5' />

        <Link to='/reactcontent'>
          <div className='flex justify-start items-center   rounded-md py-1 px-5  hover:bg-gray-300 ease-in-out '>
            <FaReact size='1.5rem' />
            <h1 className='ml-5 hover:font-bold '>React</h1>
          </div>
        </Link>


        <div className='flex justify-start items-center   rounded-md py-1 px-5  hover:bg-gray-300 ease-in-out '>
          <MdManageHistory size='1.5rem' />
          <h1 className='ml-5 hover:font-bold '>History</h1>
        </div>



        <div className='flex justify-start items-center   rounded-md py-1 px-5  hover:bg-gray-300 ease-in-out '>
          <FcBarChart color='black' size='1.5rem' />
          <h1 className='ml-5 '>Your Grades</h1>
        </div>



        <div className='flex justify-start items-center   rounded-md py-1 px-5  hover:bg-gray-300 ease-in-out '>
          <BiTimeFive size='1.5rem' />
          <h1 className='ml-5  '>Watch later</h1>
        </div>



        <div className='flex justify-start items-center   rounded-md py-1 px-5  hover:bg-gray-300 ease-in-out '>
          <SlLike size='1.5rem' />
          <h1 className='ml-5  '>Liked videos</h1>
        </div>



        <div className='flex justify-start items-center   rounded-md py-1 px-5 hover:bg-gray-300 ease-in-out '>
          <BsYoutube size='1.5rem' />
          <h1 className='ml-5  '>G</h1>
        </div>



        <div className='flex justify-start items-center   rounded-md py-1 px-5 hover:bg-gray-300 ease-in-out '>
          <BsYoutube size='1.5rem' />
          <h1 className='ml-5 '>Mix - Barry</h1>
        </div>



        <div className='flex justify-start items-center   rounded-md py-1 px-5  hover:bg-gray-300 ease-in-out '>
          <MdKeyboardArrowUp size='1.5rem' />
          <h1 className='ml-5  '>Show less</h1>
        </div>

        <hr className='my-5' />

        {/*Subscription section  */}
        <div>
          <h1 className='px-5 pb-2'>Subscription</h1>
        </div>


        <div className='flex justify-between items-center   rounded-md py-1 px-5 mx-3  hover:bg-gray-300 ease-in-out '>

          {/* the profile holder */}
          <div className='h-6 w-6 rounded-full bg-red-500'>

          </div>

          <h1 className='mx-2 hover:font-bold '>Show less</h1>
          <GrWifi size='1rem' />
        </div>


        <div className='flex justify-between items-center   rounded-md py-1 px-5 mx-3  hover:bg-gray-300 ease-in-out '>

          {/* the profile holder */}
          <div className='h-6 w-6 rounded-full bg-red-500'>

          </div>

          <h1 className='mx-2 hover:font-bold '>Show less</h1>
          <GrWifi size='1rem' />
        </div>


        <div className='flex justify-between items-center   rounded-md py-1 px-5 mx-3  hover:bg-gray-300 ease-in-out '>

          {/* the profile holder */}
          <div className='h-6 w-6 rounded-full bg-red-500'>

          </div>

          <h1 className='mx-2 hover:font-bold '>Show less</h1>
          <GrWifi size='1rem' />
        </div>


        <div className='flex justify-between items-center   rounded-md py-1 px-5 mx-3  hover:bg-gray-300 ease-in-out '>

          {/* the profile holder */}
          <div className='h-6 w-6 rounded-full bg-red-500'>

          </div>

          <h1 className='mx-2 hover:font-bold '>Show less</h1>
          <GrWifi size='1rem' />
        </div>


      </div>


    </div>
  )
}

export default LeftSection
