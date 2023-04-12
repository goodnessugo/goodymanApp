import React from 'react';
import { BsFiletypeHtml, BsFillCheckCircleFill, BsFiletypeCss } from 'react-icons/bs';
import { BsSearch, BsMicFill } from 'react-icons/bs';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { TbVideoPlus } from 'react-icons/tb';
import { FaBars, FaHome, FaReact, FaEllipsisV } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';
import { FiPaperclip } from 'react-icons/fi';
import { MdSubscriptions, MdSlowMotionVideo, MdVideoLibrary, MdManageHistory, MdKeyboardArrowUp } from 'react-icons/md';
import { AiOutlinePlaySquare } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import { SlLike } from 'react-icons/sl';
import { GrWifi } from 'react-icons/gr';

import { SiJavascript } from 'react-icons/si';

import { FcBarChart } from 'react-icons/fc';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';






const Home = () => {
  return (
    <Layout>
      {/* the home menu */}
      <div className='w-full h-full  overflow-x-hidden'>


        {/* first row */}

        <div className='flex justify-evenly pt-8 px-1 column-3'>

          {/* html Section */}
          <Link to=''>
            <div className=' h-auto w-auto'>
              <div className='htmlBackground h-52 w-80 bg-green-300 rounded-xl drop-shadow-lg hover:-translate-y-2 ease-in-out duration-300 '></div>

              <div className='flex justify-between mt-3 column-2 '>

                <div className='flex justify-between  column-2'>
                  {/* tutor image holder */}
                  <div className='tutorImage circle mr-2 h-10 w-10 border rounded-full'></div>

                  {/* title holder */}
                  <div className='title '>
                    <h1 className='mb-0 font-bold'>HTML</h1>

                    <div className=' mt-0 text-gray-500 flex items-center column-2'>
                      <h2 className='mr-3'>GoodyMan</h2>

                    </div>

                    <div className='text-gray-500 flex items-center column-3'>
                      <h2 className='mr-2'>15 topics.</h2>
                      <h2 >8 covered </h2>
                      <h2><BsFillCheckCircleFill color='green' /></h2>
                    </div>

                  </div>

                </div>

                {/* 3 dots , more option */}
                <div className='3dots'>
                  <h1>< FaEllipsisV /></h1>
                </div>

              </div>



            </div>
          </Link>

          {/* css Section */}
          <Link to=''>
            <div className=' h-auto w-auto'>
              <div className=' cssBackground h-52 w-80 bg-blue-300 rounded-xl drop-shadow-lg hover:-translate-y-2 ease-in-out duration-300'></div>

              <div className='flex justify-between mt-3 column-2 '>

                <div className='flex justify-between  column-2'>
                  {/* profile image holder */}
                  <div className='tutorImage circle mr-2 h-10 w-10 border rounded-full'></div>

                  {/* title holder */}
                  <div className='title '>
                    <h1 className='mb-0 font-bold'>How to Code in 5mins</h1>

                    <div className=' mt-0 text-gray-500 flex items-center column-2'>
                      <h2>Monkey Code</h2>
                      <h2><BsFillCheckCircleFill /></h2>
                    </div>

                    <div className='text-gray-500 flex items-start column-3'>
                      <h2>168k views</h2>
                      <h2>.</h2>
                      <h2>1 month ago</h2>
                    </div>

                  </div>

                </div>

                {/* 3 dots , more option */}
                <div className='3dots'>
                  <h1>< FaEllipsisV /></h1>
                </div>

              </div>



            </div>
          </Link>

          {/* javascript Section */}
          <Link to=''>
            <div className=' h-auto w-auto '>
              <div className='javascriptBackground  drop-shadow-lg h-52 w-80 bg-gray-300 rounded-xl hover:-translate-y-2 ease-in-out duration-300'></div>

              <div className='flex justify-between mt-3 column-2 '>

                <div className='flex justify-between  column-2'>
                  {/* profile image holder */}
                  <div className='tutorImage circle mr-2 h-10 w-10 border rounded-full'></div>

                  {/* title holder */}
                  <div className='title '>
                    <h1 className='mb-0 font-bold'>How to Code in 5mins</h1>

                    <div className=' mt-0 text-gray-500 flex items-center column-2'>
                      <h2>Monkey Code</h2>
                      <h2><BsFillCheckCircleFill /></h2>
                    </div>

                    <div className='text-gray-500 flex items-start column-3'>
                      <h2>168k views</h2>
                      <h2>.</h2>
                      <h2>1 month ago</h2>
                    </div>

                  </div>

                </div>

                {/* 3 dots , more option */}
                <div className='3dots'>
                  <h1>< FaEllipsisV /></h1>
                </div>

              </div>



            </div>
          </Link>



        </div>





        {/* second row */}

        <div className='flex justify-evenly pt-20 px-1 column-3'>


          <div className=' h-auto w-auto'>
            <div className='h-52 w-80 bg-red-300 rounded-xl'></div>

            <div className='flex justify-between mt-3 column-2 '>

              <div className='flex justify-between  column-2'>
                {/* profile image holder */}
                <div className='circle mr-2 h-10 w-10 bg-orange-200 rounded-full'></div>

                {/* title holder */}
                <div className='title '>
                  <h1 className='mb-0 font-bold'>How to Code in 5mins</h1>

                  <div className=' mt-0 text-gray-500 flex items-center column-2'>
                    <h2>Monkey Code</h2>
                    <h2><BsFillCheckCircleFill /></h2>
                  </div>

                  <div className='text-gray-500 flex items-start column-3'>
                    <h2>168k views</h2>
                    <h2>.</h2>
                    <h2>1 month ago</h2>
                  </div>

                </div>

              </div>

              {/* 3 dots , more option */}
              <div className='3dots'>
                <h1>< FaEllipsisV /></h1>
              </div>

            </div>



          </div>
          <div className=' h-auto w-auto'>
            <div className='h-52 w-80 bg-red-300 rounded-xl'></div>

            <div className='flex justify-between mt-3 column-2 '>

              <div className='flex justify-between  column-2'>
                {/* profile image holder */}
                <div className='circle mr-2 h-10 w-10 bg-orange-200 rounded-full'></div>

                {/* title holder */}
                <div className='title '>
                  <h1 className='mb-0 font-bold'>How to Code in 5mins</h1>

                  <div className=' mt-0 text-gray-500 flex items-center column-2'>
                    <h2>Monkey Code</h2>
                    <h2><BsFillCheckCircleFill /></h2>
                  </div>

                  <div className='text-gray-500 flex items-start column-3'>
                    <h2>168k views</h2>
                    <h2>.</h2>
                    <h2>1 month ago</h2>
                  </div>

                </div>

              </div>

              {/* 3 dots , more option */}
              <div className='3dots'>
                <h1>< FaEllipsisV /></h1>
              </div>

            </div>



          </div>
          <div className=' h-auto w-auto'>
            <div className='h-52 w-80 bg-red-300 rounded-xl'></div>

            <div className='flex justify-between mt-3 column-2 '>

              <div className='flex justify-between  column-2'>
                {/* profile image holder */}
                <div className='circle mr-2 h-10 w-10 bg-orange-200 rounded-full'></div>

                {/* title holder */}
                <div className='title '>
                  <h1 className='mb-0 font-bold'>How to Code in 5mins</h1>

                  <div className=' mt-0 text-gray-500 flex items-center column-2'>
                    <h2>Monkey Code</h2>
                    <h2><BsFillCheckCircleFill /></h2>
                  </div>

                  <div className='text-gray-500 flex items-start column-3'>
                    <h2>168k views</h2>
                    <h2>.</h2>
                    <h2>1 month ago</h2>
                  </div>

                </div>

              </div>

              {/* 3 dots , more option */}
              <div className='3dots'>
                <h1>< FaEllipsisV /></h1>
              </div>

            </div>



          </div>




        </div>



        {/* third row */}

        <div className='flex justify-evenly pt-20 px-1 column-3'>


          <div className=' h-auto w-auto'>
            <div className='h-52 w-80 bg-red-300 rounded-xl'></div>

            <div className='flex justify-between mt-3 column-2 '>

              <div className='flex justify-between  column-2'>
                {/* profile image holder */}
                <div className='circle mr-2 h-10 w-10 bg-orange-200 rounded-full'></div>

                {/* title holder */}
                <div className='title '>
                  <h1 className='mb-0 font-bold'>How to Code in 5mins</h1>

                  <div className=' mt-0 text-gray-500 flex items-center column-2'>
                    <h2>Monkey Code</h2>
                    <h2><BsFillCheckCircleFill /></h2>
                  </div>

                  <div className='text-gray-500 flex items-start column-3'>
                    <h2>168k views</h2>
                    <h2>.</h2>
                    <h2>1 month ago</h2>
                  </div>

                </div>

              </div>

              {/* 3 dots , more option */}
              <div className='3dots'>
                <h1>< FaEllipsisV /></h1>
              </div>

            </div>



          </div>
          <div className=' h-auto w-auto'>
            <div className='h-52 w-80 bg-red-300 rounded-xl'></div>

            <div className='flex justify-between mt-3 column-2 '>

              <div className='flex justify-between  column-2'>
                {/* profile image holder */}
                <div className='circle mr-2 h-10 w-10 bg-orange-200 rounded-full'></div>

                {/* title holder */}
                <div className='title '>
                  <h1 className='mb-0 font-bold'>How to Code in 5mins</h1>

                  <div className=' mt-0 text-gray-500 flex items-center column-2'>
                    <h2>Monkey Code</h2>
                    <h2><BsFillCheckCircleFill /></h2>
                  </div>

                  <div className='text-gray-500 flex items-start column-3'>
                    <h2>168k views</h2>
                    <h2>.</h2>
                    <h2>1 month ago</h2>
                  </div>

                </div>

              </div>

              {/* 3 dots , more option */}
              <div className='3dots'>
                <h1>< FaEllipsisV /></h1>
              </div>

            </div>



          </div>
          <div className=' h-auto w-auto'>
            <div className='h-52 w-80 bg-red-300 rounded-xl'></div>

            <div className='flex justify-between mt-3 column-2 '>

              <div className='flex justify-between  column-2'>
                {/* profile image holder */}
                <div className='circle mr-2 h-10 w-10 bg-orange-200 rounded-full'></div>

                {/* title holder */}
                <div className='title '>
                  <h1 className='mb-0 font-bold'>How to Code in 5mins</h1>

                  <div className=' mt-0 text-gray-500 flex items-center column-2'>
                    <h2>Monkey Code</h2>
                    <h2><BsFillCheckCircleFill /></h2>
                  </div>

                  <div className='text-gray-500 flex items-start column-3'>
                    <h2>168k views</h2>
                    <h2>.</h2>
                    <h2>1 month ago</h2>
                  </div>

                </div>

              </div>

              {/* 3 dots , more option */}
              <div className='3dots'>
                <h1>< FaEllipsisV /></h1>
              </div>

            </div>



          </div>




        </div>




      </div>
    </Layout>
  )
}

export default Home
