import React from 'react';
import {  BsFillCheckCircleFill } from 'react-icons/bs';
import { FaEllipsisV } from 'react-icons/fa';
import 'swiper/swiper-bundle.css';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';






const Home = () => {
  return (
    <Layout>
      {/* the home menu */}
      <div className='homeMenu w-full h-full pb-20 overflow-x-hidden '>


        {/* ------------------------first row: HTML, CSS, JavaScript---------------------*/}

        <div className='homeMenu1 flex justify-evenly pt-8 px-1 column-3'>

          {/* html Section */}
          <Link to='/html'>
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
                    <h1 className='mb-0 font-bold'>CSS</h1>

                    <div className=' mt-0 text-gray-500 flex items-center column-2'>
                      <h2>GoodyMan</h2>
                      
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
                    <h1 className='mb-0 font-bold'>JavaScript</h1>

                    <div className=' mt-0 text-gray-500 flex items-center column-2'>
                      <h2>GoodyMan</h2>
                      
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



        </div>

        {/* ----------------Second row : React, Php--------------------------*/}

        <div className='homeMenu1 flex justify-evenly pt-8 px-1 column-3'>

          {/*React Section */}
          <Link to='/html'>
            <div className=' h-auto w-auto'>
              <div className='reactBackground h-52 w-80 bg-green-300 rounded-xl drop-shadow-lg hover:-translate-y-2 ease-in-out duration-300 '></div>

              <div className='flex justify-between mt-3 column-2 '>

                <div className='flex justify-between  column-2'>
                  {/* tutor image holder */}
                  <div className='tutorImage circle mr-2 h-10 w-10 border rounded-full'></div>

                  {/* title holder */}
                  <div className='title '>
                    <h1 className='mb-0 font-bold'>React</h1>

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

          {/* git Section */}
          <Link to=''>
            <div className=' h-auto w-auto'>
              <div className=' gitBackground h-52 w-80 bg-blue-300 rounded-xl drop-shadow-lg hover:-translate-y-2 ease-in-out duration-300'></div>

              <div className='flex justify-between mt-3 column-2 '>

                <div className='flex justify-between  column-2'>
                  {/* profile image holder */}
                  <div className='tutorImage circle mr-2 h-10 w-10 border rounded-full'></div>

                  {/* title holder */}
                  <div className='title '>
                    <h1 className='mb-0 font-bold'>CSS</h1>

                    <div className=' mt-0 text-gray-500 flex items-center column-2'>
                      <h2>GoodyMan</h2>
                      
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
                    <h1 className='mb-0 font-bold'>JavaScript</h1>

                    <div className=' mt-0 text-gray-500 flex items-center column-2'>
                      <h2>GoodyMan</h2>
                      
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



        </div>

        {/* Second row */}

        <div className='homeMenu1 flex justify-evenly pt-8 px-1 column-3'>

          {/* html Section */}
          <Link to='/html'>
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
                    <h1 className='mb-0 font-bold'>CSS</h1>

                    <div className=' mt-0 text-gray-500 flex items-center column-2'>
                      <h2>GoodyMan</h2>
                      
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
                    <h1 className='mb-0 font-bold'>JavaScript</h1>

                    <div className=' mt-0 text-gray-500 flex items-center column-2'>
                      <h2>GoodyMan</h2>
                      
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



        </div>

        {/* Second row */}

        <div className='homeMenu1 flex justify-evenly pt-8 px-1 column-3'>

          {/* html Section */}
          <Link to='/html'>
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
                    <h1 className='mb-0 font-bold'>CSS</h1>

                    <div className=' mt-0 text-gray-500 flex items-center column-2'>
                      <h2>GoodyMan</h2>
                      
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
                    <h1 className='mb-0 font-bold'>JavaScript</h1>

                    <div className=' mt-0 text-gray-500 flex items-center column-2'>
                      <h2>GoodyMan</h2>
                      
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



        </div>











      </div>
    </Layout>
  )
}

export default Home
