import React from 'react'
import { BsFiletypeHtml, BsFiletypeCss } from 'react-icons/bs';
import { FaBars, FaHome, FaReact } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';
import { MdManageHistory, MdKeyboardArrowUp } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';
import { SlLike } from 'react-icons/sl';
import { GrWifi } from 'react-icons/gr';
import { SiJavascript } from 'react-icons/si';
import { FcBarChart } from 'react-icons/fc';

const LeftSection = () => {
  return (
    <div className='LeftSide menuSection h-screen w-2/12 bg-white'>
        <div className='w-full h-1/6 bg-white'>
          <div className='w-full flex justify-between px-5 pt-5'>
            <div className=' flex justify-between items-center'>
              {/* 3 bar logo */}
              <FaBars />
            </div>

            <div className='flex justify-between items-center'>
              {/* youtube logo */}
              <div className='logoImage h-10 w-10 '>

              </div>
              {/* < BsYoutube color='green' size='2rem' /> */}
              <h1 className='font-bold text-2xl '>GoodyMan</h1>
            </div>




          </div>

        </div>

        {/* the menu listing */}

        <div className='menu w-full h-5/6 bg-white overflow-x-hidden'>


          <div className='flex justify-start items-center   rounded-md py-1 px-5 mx-3 hover:bg-gray-300 ease-in-out '>
            <FaHome size='1.5rem' />
            <h1 className='ml-5 hover:font-bold '>Home</h1>
          </div>


          <div className='flex justify-start items-center   rounded-md py-1 px-5 mx-3 hover:bg-gray-300 ease-in-out '>
            <BsFiletypeHtml size='1.2rem' />
            <h1 className='ml-5 hover:font-bold '>HTML</h1>
          </div>


          <div className='flex justify-start items-center   rounded-md py-1 px-5 mx-3 hover:bg-gray-300 ease-in-out '>
            <BsFiletypeCss size='1.2rem' />
            <h1 className='ml-5 hover:font-bold '>CSS</h1>
          </div>


          <div className='flex justify-start items-center   rounded-md py-1 px-5 mx-3 hover:bg-gray-300 ease-in-out '>
            <SiJavascript size='1rem' />
            <h1 className='ml-5  '>JavaScript</h1>
          </div>

          <hr className='my-5' />


          <div className='flex justify-start items-center   rounded-md py-1 px-5 mx-3 hover:bg-gray-300 ease-in-out '>
            <FaReact size='1.5rem' />
            <h1 className='ml-5 hover:font-bold '>React</h1>
          </div>



          <div className='flex justify-start items-center   rounded-md py-1 px-5 mx-3 hover:bg-gray-300 ease-in-out '>
            <MdManageHistory size='1.5rem' />
            <h1 className='ml-5 hover:font-bold '>History</h1>
          </div>



          <div className='flex justify-start items-center   rounded-md py-1 px-5 mx-3 hover:bg-gray-300 ease-in-out '>
            <FcBarChart color='black' size='1.5rem' />
            <h1 className='ml-5 hover:font-bold '>Your Grades</h1>
          </div>



          <div className='flex justify-start items-center   rounded-md py-1 px-5 mx-3 hover:bg-gray-300 ease-in-out '>
            <BiTimeFive size='1.5rem' />
            <h1 className='ml-5 hover:font-bold '>Watch later</h1>
          </div>



          <div className='flex justify-start items-center   rounded-md py-1 px-5 mx-3 hover:bg-gray-300 ease-in-out '>
            <SlLike size='1.5rem' />
            <h1 className='ml-5 hover:font-bold '>Liked videos</h1>
          </div>



          <div className='flex justify-start items-center   rounded-md py-1 px-5 mx-3 hover:bg-gray-300 ease-in-out '>
            <BsYoutube size='1.5rem' />
            <h1 className='ml-5 hover:font-bold '>G</h1>
          </div>



          <div className='flex justify-start items-center   rounded-md py-1 px-5 mx-3 hover:bg-gray-300 ease-in-out '>
            <BsYoutube size='1.5rem' />
            <h1 className='ml-5 hover:font-bold '>Mix - Barry</h1>
          </div>



          <div className='flex justify-start items-center   rounded-md py-1 px-5 mx-3  hover:bg-gray-300 ease-in-out '>
            <MdKeyboardArrowUp size='1.5rem' />
            <h1 className='ml-5 hover:font-bold '>Show less</h1>
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
