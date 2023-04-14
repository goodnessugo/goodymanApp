import React from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'


const UserProfile = () => {
  return (
    <Layout>
      <div className='h-full w-full overflow-x-hidden '>
        <div className='    flex flex-col items-center  bg-green-200 py-5 mb-20 '>

          {/* profile Image and Change photo icon */}
          <div className='flex justify-center items-end'>
            <div className='profileImage w-48 h-48 rounded-full border-8 drop-shadow-lg'>
              {/* the image is here in the background */}
            </div>

            {/* edit picture icon */}

            <div className=' w-10 h-10 bg-gray-500 rounded-full border-4 flex justify-center items-center '>
              < FaPencilAlt />
            </div>
          </div>

          {/* name */}
          <div>
            <h1 className='font-bold text-2xl mt-3'>Anna Ujunwa Robert </h1>
          </div>


          {/* the filling section */}
          <div className='formHolder w-2/6 h-fit p-5 mt-5 bg-white  drop-shadow-md rounded-lg'>
            <h1 className=' font-bold'> Edit Profile</h1>
            <form action="/">
              <input type="text" placeholder='Username' className='w-full h-12 mt-3 drop-shadow-lg focus:outline-none text-2xl mb-3 pl-3 rounded ' />

              <input type="text" placeholder='Country' className='w-full h-11 mb-3 drop-shadow-lg  focus:outline-none text-2xl pl-3 rounded' />
              <input type="text" placeholder='Class' className='w-full h-12 mb-3 drop-shadow-lg  focus:outline-none text-2xl pl-3 rounded' />
              <input type="date" placeholder='Age' className='w-full h-12 mb-3 drop-shadow-lg  focus:outline-none text-2xl pl-3 rounded' />

              {/* save changes button */}
              <div className='w-full  flex justify-evenly items-center '>
                <button className='px-5 py-3 bg-red-3 rounded-lg font-bold hover:bg-red-500 ease-in-out hover:text-white'>Cancel</button>

                <button className='px-5 py-3 bg-blue-500 rounded-lg font-bold hover:bg-green-500 ease-in-out hover:text-white'>Save Changes</button>

              </div>
            </form>
          </div>


          {/* Table for collection of Studies */}
          <div className='w-2/6  my-5  px-3 bg-red-500'>
            {/* <table className=' w-full'>
            <thead>
              <tr>
                <th>Course</th>
                <th>Grade</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>HTML</td>
                  <td>35.5%</td>
                  <td>Completed</td>
                </tr>
                <tr>

                </tr>
                <tr></tr>
                <tr></tr>
            </tbody>
          </table> */}
          </div>
        </div>



        {/* the profile background  image*/}
        {/* <div className='profileBackground w-full h-screen absolute z-10 opacity-25 py-5 '>

        </div> */}




      </div>
    </Layout>
  )
}

export default UserProfile
