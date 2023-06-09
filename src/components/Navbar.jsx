import React, { useState } from 'react'
import { BsSearch, BsMicFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';






const Navbar = () => {

  const [show, setShow] = useState(true)


  return (
    <div>

      <div className='NavSection w-full h-24 flex items-center justify-between p-4  bg-green-100  overflow-y-hidden '>


        {/* the left top section */}
        <div className='toplLeft w-fit h-fit '>
          <div className='navTop w-full flex justify-between items-center gap-3 '>


            <div className='flex justify-between items-center'>



              {/* -------barIcon----------- */}

              {/* 3 bar logo */}
              {/* {
                show ? <LeftSection /> : null
              } */}


              <Link to='/mobilenavbar'>
                <div className=' barIcon px-2 flex justify-between items-center'>
                 
                  <FaBars size='1.5rem' />
                </div>
              </Link>








              {/* company logo */}
              <Link to='/'>
                <div className='logoImage h-8 w-8 '>

                </div>
              </Link>

              {/* < BsYoutube color='green' size='2rem' /> */}


              <h1 className='siteName font-bold text-2xl pl-3'>GoodyMan</h1>

            </div>




          </div>

        </div>

        {/* end of left top section */}



        <div className='formSectionAndMic flex justify-end items-center  w-8/12 '>

          <div className=' searchBox h-10 w-9/12 rounded-l-full bg-white border border-gray flex justify-start items-center pl-3'>

            <div className='search flex justify-center items-center  w-10  '>
              <BsSearch />
            </div>

            <form method='post' >

              <input type="text" placeholder='Search' className=' w-full  focus:outline-none' />

            </form>
          </div>


          <div className=' searchAndMic flex justify-center items-center '>
            <div className='search bg-green-500 flex  justify-center items-center bg-gray-100 hover:bg-gray-300 border border-gray w-16 h-10 rounded-r-full'>
              <BsSearch />
            </div>

            <div className='microphone flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-300 ease-in-out duration-300'>
              <BsMicFill />
            </div>

          </div>



        </div>



        <div className='profileSection flex justify-between items-center w-fit gap-2  px-4 '>



          <div className='notification  hover:bg-gray-300 ease-in-out duration-300 rounded-full h-10 w-10 flex items-center justify-center'>
            <IoIosNotificationsOutline size='1.5rem' />
          </div>

          <Link to='/userprofile'>
            <div >
              <div className='profileImage h-10 w-10 bg-green-500 rounded-full drop-shadow-md border-2 border-white '>
                <br />

                <h1 className='profileName font-bold mt-3'>Anna</h1>
              </div>

            </div>
          </Link>

        </div>





      </div>





    </div>

  )
}

export default Navbar
