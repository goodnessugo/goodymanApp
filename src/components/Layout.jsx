import React, { useState } from 'react'
import LeftSection from './LeftSection'
import Navbar from './Navbar'
import { FaBars } from 'react-icons/fa'


const Layout = ({ children }) => {




    const [show, setShow] = useState(true)

    return (
        <div className=' '>





            <Navbar />

            {/* -------barIcon----------- */}

            {/* 3 bar logo */}
            {/* {
                show ? <div className='mobileMenu'><LeftSection /></div> : null
            } */}

            {/* <div className=' barIcon px-2 flex justify-between items-center'>
                <FaBars size='1.5rem' onClick={() => setShow(!show)} />
            </div> */}




            {/*------------------ the Right Side ---------------------*/}
            <div className='RightSide flex  h-screen w-full overflow-x-hidden '>





                <LeftSection />

                {/* -------------------the third Section ---------------------this is the begining of the movie part */}
                {children}
            </div>


        </div>
    )
}

export default Layout
