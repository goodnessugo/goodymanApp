import React, { useState } from 'react'
import { BsFiletypeHtml, BsFiletypeCss, BsGithub } from 'react-icons/bs';
import { FaHome, FaReact } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';
import { MdManageHistory, MdKeyboardArrowUp } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';
import { SlLike } from 'react-icons/sl';
import { GrWifi } from 'react-icons/gr';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';
import { FcBarChart } from 'react-icons/fc';
import { ImCancelCircle } from 'react-icons/im';
import { Link } from 'react-router-dom';
import Layout from './Layout'


const MobileNavbar = () => {


    // const [show, setShow] = useState(true)

    return (
        <Layout>
            <div className='   '>


                {/* the closing button */}

            <Link to=' '>
                    <div className='flex justify-end items-center bg-gray-100  rounded-md py-1 px-5   '>
                        <ImCancelCircle size='1.5rem' className='hover:text-red-500 ease-in-out'  />

                    </div>
                </Link>



                {/* the  menu */}
                


                        <div className='mobileNav lg:hidden  w-screen h-3/6 pt-5 overflow-x-hidden bg-gray-100 '>

                           

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


                            <Link to='/git'>
                                <div className='flex justify-start items-center   rounded-md py-1 px-5  hover:bg-gray-300 ease-in-out '>
                                    <BsGithub size='1.5rem' />
                                    <h1 className='ml-5 hover:font-bold '>Git Hub</h1>
                                </div>
                            </Link>


                            <Link to='/tailwind'>
                                <div className='flex justify-start items-center   rounded-md py-1 px-5  hover:bg-gray-300 ease-in-out '>
                                    <SiTailwindcss size='1.5rem' />
                                    <h1 className='ml-5 hover:font-bold '>Tailwind</h1>
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



                            <hr className='my-5' />


                        </div>
        


               

               




            </div>


        </Layout>





    )
}

export default MobileNavbar
