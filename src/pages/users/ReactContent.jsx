import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'
import { MdOutlineArrowRight} from 'react-icons/md'

const ReactContent = () => {
  return (
    <Layout>
    <div className='coursePage pt-5 px-5 pb-40   overflow-x-hidden '>
        <h1 className='pb-5 text-2xl'>HTML <span className='font-bold text-green-500'>15 Courses</span></h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, illum delectus sed quibusdam ea molestias, blanditiis nemo dignissimos tempore voluptatibus doloremque ab, recusandae alias itaque nostrum officiis? Natus dolorum vitae ullam distinctio placeat eligendi cumque? Quis, consequuntur nam ducimus sed eveniet corporis expedita omnis perferendis labore fugit, quibusdam veniam pariatur!</h2>

        <div className='courseSection py-5 mt-5   bg-gray-500 rounded-lg h-96 overflow-x-hidden'>
            <ul className='px-5 '>
                <Link to='/content'>
                    <li>
                        <div className='w-full h-10 px-5 py-2 bg-gray-200 rounded-lg flex justify-between items-center hover:bg-gray-300 my-3 '>
                            <h1 className=' '>Introduction to HTML</h1>
                            < MdOutlineArrowRight size='2rem' />
                        </div>
                    </li>
                </Link>
                <Link to='/content'>
                    <li>
                        <div className='w-full h-10 px-5 py-2 bg-gray-200 rounded-lg flex justify-between items-center hover:bg-gray-300 my-3 '>
                            <h1 className=' '>Introduction to HTML</h1>
                            < MdOutlineArrowRight size='2rem' />
                        </div>
                    </li>
                </Link>
                <Link to='/content'>
                    <li>
                        <div className='w-full h-10 px-5 py-2 bg-gray-200 rounded-lg flex justify-between items-center hover:bg-gray-300 my-3 '>
                            <h1 className=' '>Introduction to HTML</h1>
                            < MdOutlineArrowRight size='2rem' />
                        </div>
                    </li>
                </Link>
                <Link to='/content'>
                    <li>
                        <div className='w-full h-10 px-5 py-2 bg-gray-200 rounded-lg flex justify-between items-center hover:bg-gray-300 my-3 '>
                            <h1 className=' '>Introduction to HTML</h1>
                            < MdOutlineArrowRight size='2rem' />
                        </div>
                    </li>
                </Link>
                <Link to='/content'>
                    <li>
                        <div className='w-full h-10 px-5 py-2 bg-gray-200 rounded-lg flex justify-between items-center hover:bg-gray-300 my-3 '>
                            <h1 className=' '>Introduction to HTML</h1>
                            < MdOutlineArrowRight size='2rem' />
                        </div>
                    </li>
                </Link>
                <Link to='/content'>
                    <li>
                        <div className='w-full h-10 px-5 py-2 bg-gray-200 rounded-lg flex justify-between items-center hover:bg-gray-300 my-3 '>
                            <h1 className=' '>Introduction to HTML</h1>
                            < MdOutlineArrowRight size='2rem' />
                        </div>
                    </li>
                </Link>
                <Link to='/content'>
                    <li>
                        <div className='w-full h-10 px-5 py-2 bg-gray-200 rounded-lg flex justify-between items-center hover:bg-gray-300 my-3 '>
                            <h1 className=' '>Introduction to HTML</h1>
                            < MdOutlineArrowRight size='2rem' />
                        </div>
                    </li>
                </Link>
                <Link to='/content'>
                    <li>
                        <div className='w-full h-10 px-5 py-2 bg-gray-200 rounded-lg flex justify-between items-center hover:bg-gray-300 my-3 '>
                            <h1 className=' '>Introduction to HTML</h1>
                            < MdOutlineArrowRight size='2rem' />
                        </div>
                    </li>
                </Link>
                <Link to='/content'>
                    <li>
                        <div className='w-full h-10 px-5 py-2 bg-gray-200 rounded-lg flex justify-between items-center hover:bg-gray-300 my-3 '>
                            <h1 className=' '>Introduction to HTML</h1>
                            < MdOutlineArrowRight size='2rem' />
                        </div>
                    </li>
                </Link>
                <Link to='/content'>
                    <li>
                        <div className='w-full h-10 px-5 py-2 bg-gray-200 rounded-lg flex justify-between items-center hover:bg-gray-300 my-3 '>
                            <h1 className=' '>Introduction to HTML</h1>
                            < MdOutlineArrowRight size='2rem' />
                        </div>
                    </li>
                </Link>
                
               
               
               
               
            </ul>

        </div>
    </div>
</Layout>
  )
}

export default ReactContent
