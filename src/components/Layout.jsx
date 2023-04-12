import React from 'react'
import LeftSection from './LeftSection'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <div className='h-max flex overflow-hidden  '>

            {/* ----------------The Left Section--------------------- */}
            <LeftSection />



            {/*------------------ the Right Side ---------------------*/}
            <div className='RightSide  h-screen w-10/12  '>




                {/* top search section */}
                <Navbar />

                {/* -------------------the third Section ---------------------this is the begining of the movie part */}
                {children}
            </div>


        </div>
    )
}

export default Layout
