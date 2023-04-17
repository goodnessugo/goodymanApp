import React from 'react'
import Layout from '../../components/Layout'

const Content = () => {
  return (
    <Layout>
        <div className='contentSection w-full  grid grid-cols-2 gap-2 mb-28'>
            
            {/* the Text Area */}
            <div className='textArea bg-purple-500 p-5'  >
                    <h1>Place the Text and code here</h1>
            </div>

            {/* The Video Area */}
            <div className='videoArea bg-orange-500 p-5'>

            </div>

        </div>
    </Layout>
  )
}

export default Content
