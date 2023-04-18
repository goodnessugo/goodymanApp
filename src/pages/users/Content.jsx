import React from 'react'
import Layout from '../../components/Layout'
import vid1 from '../../videos/vid1.mp4'
import image from '../../images/bgImage1.jpg'

const Content = () => {
  return (
    <Layout>
        <div className='contentSection w-full  grid grid-cols-2 gap-2 mb-28 p-3'>
            
            {/* the Text Area */}
            <div className='textArea bg-purple-500 p-5 overflow-x-hidden'  >
                    <h1>Place the Text and code here</h1>
                    
                <img src={image} className='rounded-lg' />
                <h1>Place the Text and code here</h1>
                <h1>Place the Text and code here</h1>
                <h1>Place the Text and code here</h1>
                <h1>Place the Text and code here</h1>
                <h1>Place the Text and code here</h1>
                <h1>Place the Text and code here</h1>
                <h1>Place the Text and code here</h1>
                <h1>Place the Text and code here</h1>
                <h1>Place the Text and code here</h1>
                <h1>Place the Text and code here</h1>
                <h1>Place the Text and code here</h1>
                <h1>Place the Text and code here</h1>
                <h1>Place the Text and code here</h1>
            </div>

            {/* The Video Area */}
            <div className='videoArea bg-orange-500 p-5 '>
              <video src={vid1}  className='w-full' controls></video>
            </div>

        </div>
    </Layout>
  )
}

export default Content
