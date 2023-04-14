import React from 'react'
import LeftSection from './LeftSection'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <div className=' '>

        <Navbar />
            
            
            {/*------------------ the Right Side ---------------------*/}
            <div className='RightSide flex  h-screen w-full  '>
  
                <LeftSection />
                {/* -------------------the third Section ---------------------this is the begining of the movie part */}
                {children}
            </div>
            

        </div>
    )
}

export default Layout
