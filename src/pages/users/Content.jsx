import React from 'react'
import Layout from '../../components/Layout'
import vid1 from '../../videos/vid1.mp4'
import image from '../../images/bgImage1.jpg'
import { MdManageHistory } from 'react-icons/md'
import CodeEditor from './CodeEditor'

const Content = () => {
  return (
    <Layout>
      <div className='contentSection w-full  grid grid-cols-2 gap-2 mb-28 p-3'>

        {/* the Text Area */}
        <div className='textArea bg-amber-100 p-5 overflow-x-hidden rounded-md'  >
          <h1>Place the Text and code here</h1>
          <div className='py-5 flex items-center gap-2'>
            <h2>Click Video to  </h2> < MdManageHistory /> 
          </div>

          {/* the lecture video */}
          <div className='videoCourse pb-3'>
          <video src={vid1} className='w-full' controls></video>
          </div>

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
        <div className='codeArea bg-orange-500 '>
          < CodeEditor />
        </div>

      </div>
    </Layout>
  )
}

export default Content
