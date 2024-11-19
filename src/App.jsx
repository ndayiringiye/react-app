import React from 'react'
import Header from './Component/Header'
import Images from './Component/Images'
import Logo from './Component/Logo'
import Section from './Component/Section'

const App = () => {
  return (
    <div className='w-7/12 h-2/2 bg-[#e7dfd8]  mx-auto pb-8 mt-10'>

      <Header/>
      <div className=''>
      <div className='grid grid-cols-2 grid-cols-center gap-10  w-5/6 mx-auto bg-[#e7dfd8] border border-black py-4 px-4'>
         <Section/>
         <Images/>
         <Logo/>
      </div>
      </div> 

    </div>
  )
}

export default App